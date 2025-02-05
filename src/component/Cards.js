import { Link } from "react-router-dom";


export const EventCard = (props) => {
  return (
    <div className="EventCard__Container">
      <img className="EventCardImg" src={props.src} alt={props.alt} />
      <div className="EventCard__Content">
        <h3 className="EventCard__Heading">{props.EventName}</h3>
        <div className="EventCard__ContentDetail">
          <div className="EventCard__Time-Date">
            <p className="EventCard__Date">{props.date}</p>
            <p className="EventCard__Time">
              {props.startTime} - {props.endTime}
            </p>
          </div>
          <div className="EventCard__ContentDescription">
            <p className="EventCard__Location">{props.location}</p>
            <p className="EventCard__Description">{props.description} </p>
          </div>
        </div>
      </div>
    </div>
  );
};



export const SmallCardImg = (props) => {
  // Small card with img, name and job title

  return (
    <div>
      <div className="SmallCard__Container">
        <img
          className={`SmallCardImg--img ${props.radiusValue}`}
          src={props.src}
          alt={props.alt}
        />
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

//About us Page cards
export const AboutCardBig = (props) => {
  return (
    <div className="AboutCardBig__Container">
      <img className="AboutCardBig--img" src={props.src} alt={props.alt} />
      <div className="AboutCardBig__ContentContainer">
        <h2 className="AboutCardBig__Heading">{props.name}</h2>
        <div className="AboutCardBig__DetailContainer">
          <p className="AboutCardBig--p">
            <span className="AboutCardBig__Span">{props.name}</span>
            {props.para1}
          </p>
          <p className="AboutCardBig--p">{props.para2}</p>
        </div>
      </div>
    </div>
  );
};

export const AboutCardSmall = (props) => {
  return (
    <div className="AboutCardSmall__Container">
      <img className="AboutCardSmall--img" src={props.src} alt={props.alt} />
      <div className="AboutCardSmall__ContentContainer">
        <p className="AboutCardSmall--p">{props.para1}</p>
        <p className="AboutCardSmall--p">{props.para2}</p>
        <p className="AboutCardSmall--p">{props.para3}</p>
        <p className="AboutCardSmall--p">{props.para4}</p>
        <p className="AboutCardSmall--p">{props.para5}</p>
      </div>
    </div>
  );
};

export const CommonCard = (props) => {
  return (
    <>
      <div className="CommonCard__Container">
        <h2 className={`CommonCard--h3 ${props.titleColor}`}>{props.title}</h2>
        <ul className="CommonCard--ul">
          <li className="CommonCard--li">{props.no1}</li>
          <li className="CommonCard--li">{props.no2}</li>
          <li className="CommonCard--li">{props.no3}</li>
          <li className="CommonCard--li">{props.no4}</li>
          <li className="CommonCard--li">{props.no5}</li>
          <li className="CommonCard--li">{props.no6}</li>
          <li className="CommonCard--li">{props.no7}</li>
        </ul>
      </div>
    </>
  );
};

// Councils card
export const CouncilCard = (props) => {
  return (
    <>
      <div className="CouncilCard__Container">
        <img className="CouncilCard__Img" src={props.src} alt={props.alt} />
        <div className="CouncilCard__ContentContainer">
          <div className="CouncilCard__NameContainer">
            <h2 className="Heading--h2">{props.name}</h2>
            <p className="Heading--h4">{props.title}</p>
          </div>
          <p className="CouncilCard--p">{props.detail}</p>
        </div>
      </div>
    </>
  );
};


export const BigCard4grid = (props) =>{
  return(
    <>
    <Link to={props.link} className="BigCard4grid__Container">
      <img className="BigCard4grid--img" src={props.src} alt={props.alt}/>
      <p className="BigCard4grid--p">{props.title}</p>
    </Link>
    </>
  )
}
export const SmallCard3grid = (props) =>{
  return(
    <>
    <Link to={props.link} className="SmallCard3grid__Container">
      <img className="SmallCard3grid--img" src={props.src} alt={props.alt}/>
      <p className="SmallCard3grid--p">{props.title}</p>
    </Link>
    </>
  )
}

export const ZoneCard = () =>{
  return(
    <div>
      <img/>
      <di>
        <div>
          <h3></h3>
          <p></p>
        </div>
        <p></p>
      </di>
    </div>
  )
}