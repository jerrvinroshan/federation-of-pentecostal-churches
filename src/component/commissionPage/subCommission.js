import phoneIcon from "../../assets/icons/phonecall.svg";
import { Footer } from "../Footer";
import { Header } from "../Header";

export const SubCommission = ({ commission }) => {
  return (
    <>
      <Header
        src={commission.image}
        Header={commission.commissionName}
        firstPara={commission.para1}
        secondPara={commission.para2}
      />
      <div className="Subcommission__Container">
        {commission.subCommission.map((subCommission) => (
          <div key={subCommission.id} className="Subcommission__Description">
            <img
              className="Subcommission__Img"
              src={subCommission.image}
              alt={subCommission.alt}
            />
            <div className="Subcommission__ContentContainer">
              <div className="vrLine vrLineHide"></div>
              <div className="SubCommission__ContentHeading">
                {subCommission.member.map((member) => (
                  <div key={member.id} className="Member__Container">
                    <img
                      className="Member__img"
                      src={member.image}
                      alt={member.alt}
                    />
                    <div className="Member__detail">
                      <h2 className="Member__Heading">{member.memberName}</h2>
                      <a
                        className="Member__Contact"
                        href={`tel:91${member.contact}`}
                      >
                        <img src={phoneIcon} />
                        {member.contact}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};
