export const DepartmentHeader = ({ department }) => {
  return (
    <>
      <header className="Header__Container">
        <div className="ImgOverlay__Container">
          <div className="ImgOverlay"></div>
          <img
            className="Header__Img"
            src={department.image}
            alt={department.alt}
          />
        </div>
        <div className="Bg__Overlay">
          <div className="Header__ContentContainer">
            <h1 className="Header__heading">{department.Header}</h1>
            <div className="Header__ContentDetails">
              <p className="Header__ContentDetails--p">
                {department.firstPara}
              </p>
              <p className="Header__ContentDetails--p">
                {department.secondPara}
              </p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
