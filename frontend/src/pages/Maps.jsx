import { useState } from "react";
import mapHD from "../assets/mapHD.jpeg";
import "../App.css";

function ImageMagnifier({
  src,
  width,
  height,
  magnifierHeight = 250,
  magnifieWidth = 250,
  zoomLevel = 5,
}) {
  const [[x, y], setXY] = useState([0, 0]);
  const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
  const [showMagnifier, setShowMagnifier] = useState(false);
  return (
    <div
      className="mapDiv"
      style={{
        position: "relative",
        height,
        width,
      }}
    >
      <img
        className="mapHD"
        src={src}
        style={{ height, width }}
        onMouseEnter={(e) => {
          // update image size and turn-on magnifier
          const elem = e.currentTarget;
          const elementWidth = elem.getBoundingClientRect().width;
          const elementHeight = elem.getBoundingClientRect().height;

          setSize([elementWidth, elementHeight]);
          setShowMagnifier(true);
        }}
        onMouseMove={(e) => {
          // update cursor position
          const elem = e.currentTarget;
          const { top, left } = elem.getBoundingClientRect();

          // calculate cursor position on the image
          const cursorX = e.pageX - left - window.pageXOffset;
          const cursorY = e.pageY - top - window.pageYOffset;
          setXY([cursorX, cursorY]);
        }}
        onMouseLeave={() => {
          // close magnifier
          setShowMagnifier(false);
        }}
        alt="img"
      />

      <div
        style={{
          display: showMagnifier ? "" : "none",
          position: "absolute",

          // prevent maginier blocks the mousemove event of img
          pointerEvents: "none",
          // set size of magnifier
          height: `${magnifierHeight}px`,
          width: `${magnifieWidth}px`,
          // move element center to cursor pos
          top: `${y - magnifierHeight / 2}px`,
          left: `${x}px`,
          opacity: "1", // reduce opacity so you can verify position
          border: "1px solid lightgray",
          backgroundColor: "white",
          backgroundImage: `url('${src}')`,
          backgroundRepeat: "no-repeat",

          borderRadius: `${50}%`,

          // calculate zoomed image size
          backgroundSize: `${imgWidth * zoomLevel}px ${
            imgHeight * zoomLevel
          }px`,

          // calculete position of zoomed image.
          backgroundPositionX: `${-x * zoomLevel + magnifieWidth / 2}px`,
          backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`,
        }}
      />
    </div>
  );
}

export default function Maps() {
  return (
    <div>
      <ImageMagnifier src={mapHD} />
    </div>
  );
}

// export default function Maps() {
//   return (
//     <div className="mapDiv">
//       <img className="mapHD" src={mapHD} alt="" />
//     </div>
//   );
// }
