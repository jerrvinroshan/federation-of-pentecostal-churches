import "../assets/style.css";
import { HomeBtn } from "./Btn";

export const HomeHeroSmall = (props) => {
  return (
    <div className="HomeHeroSmall__Container">
      <img className="HomeHero__SmallImg" src={props.src} alt={props.alt} />
      <div className="HomeHero__Content">
        <h2 className="HomeHero__Heading">{props.Title}</h2>
        <HomeBtn BtnName="Know more" />
      </div>
    </div>
  );
};

export const HomeHeroBig = (props) => {
  return (
    <div className="HomeHeroBig__Container">
      <img className="HomeHero__BigImg" src={props.src} alt={props.alt}/>
      <div className="HomeHero__BigContent">
        <h1 className="HomeHero__Heading--h1">{props.Title}</h1>
        <HomeBtn BtnName="Know more" />
      </div>
    </div>
  );
};
