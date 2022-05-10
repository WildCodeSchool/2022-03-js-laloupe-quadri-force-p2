import "../components/Button.scss";

export default function Egg() {
  return (
    <section className="myeggsection">
      <div className="EggDiv">
        <h1>ERROR 404</h1>
        <h2>IT LOOKS LIKE YOU FOUND A</h2>
        <h1>DEAD LINK</h1>
        <img className="EggHD" src="/src/assets/EasterEggBis.png" alt="" />
        <a
          className="decorated-button"
          href="http://127.0.0.1:5501/index.html"
          target="_blank"
          rel="noreferrer"
        >
          <div className="button-text">Save and Continue</div>
          <div className="left-decoration top" />
          <div className="left-decoration bottom" />
          <div className="right-decoration top" />
          <div className="right-decoration bottom" />
        </a>
      </div>
    </section>
  );
}
