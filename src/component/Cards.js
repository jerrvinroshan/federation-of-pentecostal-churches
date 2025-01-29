export const SmallCardImg = (props) => {
  // Small card with img, name and job title

  return (
    <div>
      <div className="SmallCard__Container">
        <img className="SmallCardImg--img" src={props.src} alt={props.alt} />
        <div className="SmallCard__ContentContainer">
          <h2 className="SmallCard--h2">{props.name}</h2>
          <p className="SmallCard--p">{props.title}</p>
        </div>
      </div>
    </div>
  );
};

export const BigCardImg = (props) => {
  // Big card with img, name and job title

  return (
    <div>
      <div className="BigCard__Container">
        <img className="BigCardImg--img" src={props.src} alt={props.alt} />
        <div className="BigCard__ContentContainer">
          <h2 className="BigCard--h2">{props.name}</h2>
          <p className="BigCard--p">{props.title}</p>
        </div>
      </div>
    </div>
  );
};

export const SmallCardImgBg = (props) => {
  return (
    <div>
      <a href={props.href} className="SmallCardImgBg__Container">
        <img className="SmallCardImgBg--img" src={props.src} alt={props.alt} />
        <h2 className="SmallCardImgBg--h2">{props.title}</h2>
      </a>
    </div>
  );
};

export const BigCardImgBg = (props) => {
    return (
      <div>
        <a href={props.href} className="BigCardImgBg__Container">
          <img className="BigCardImgBg--img" src={props.src} alt={props.alt} />
          <h2 className="BigCardImgBg--h2">{props.title}</h2>
        </a>
      </div>
    );
  };

