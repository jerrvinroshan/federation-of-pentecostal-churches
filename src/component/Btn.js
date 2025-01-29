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
      <a className="AboutBtn" href={props.href}>
        {props.BtnName}
      </a>
    </>
  );
};
