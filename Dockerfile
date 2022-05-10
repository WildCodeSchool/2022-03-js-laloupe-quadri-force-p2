# build environment
FROM node:16.15.0 as builder
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
ARG VITE_API_BASE_URL=${VITE_API_BASE_URL}
ENV VITE_API_BASE_URL=${VITE_API_BASE_URL}
COPY . /usr/src/app
RUN npm install
RUN npm run build

# production environment
FROM nginx:1.13.9-alpine
RUN rm -rf /etc/nginx/conf.d
RUN mkdir -p /etc/nginx/conf.d
COPY ./default.conf /etc/nginx/conf.d/
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html
RUN mkdir -p /usr/share/nginx/html/src/assets/images
COPY ./src/assets/images /usr/share/nginx/html/src/assets/images
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
