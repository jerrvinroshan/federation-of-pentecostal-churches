import Map from "../../assets/image/map.svg";

export const ContactMap = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "grey",
          display: "flex",
          justifyContent: "center",
          marginTop: "132px",
          maxWidth: "1232px",
          marginInline: "auto",
        }}
      >
        <img src={Map} alt="Federation of Pentecostal Churches Location"/>
      </div>
    </>
  );
};
