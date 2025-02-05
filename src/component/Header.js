export const Header = (props) => {
  return (
    <>
      <header className="Header__Container">
        <div className="ImgOverlay__Container">
          <div className="ImgOverlay"></div>
          <img className="Header__Img" src={props.src} alt={props.alt} />
        </div>
        <div className="Bg__Overlay">
          <div className="Header__ContentContainer">
            <h1 className="Header__heading">{props.Header}</h1>
            <div className="Header__ContentDetails">
              <p className="Header__ContentDetails--p">{props.firstPara}</p>
              <p className="Header__ContentDetails--p">{props.secondPara}</p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
