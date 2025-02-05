import { Link } from "react-router-dom";

export const HomeBtn = (props) => {
  return (
    <>
      <a className="HomeBtn" href={props.href}>
        {props.BtnName}
      </a>
      {/*Enter the Btn name */}
    </>
  );
};

export const AboutusBtn = (props) => {
  return (
    <>
      <Link to={props.link} className="AboutBtn">
        {props.BtnName}
      </Link>
    </>
  );
};
