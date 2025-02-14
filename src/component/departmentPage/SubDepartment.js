import { Header } from "../Header";
import { Footer } from "../Footer";

import phoneIcon from "../../assets/icons/phonecall.svg";

export const SubDepartment = ({ department }) => {
  return (
    <>
      <Header
        src={department.image}
        Header={department.departmentName}
        firstPara={department.para1}
        secondPara={department.para2}
      />
      <div className="Subdepartment__Container">
        {department.subDepartment.map((subDepartment) => (
          <div key={subDepartment.id} className="Subdepartment__Description">
            <img
              className="Subdepartment__Img"
              src={subDepartment.image}
              alt={subDepartment.alt}
            />
            <div className="Subdepartment__ContentContainer">
              <div className="vrLine vrLineHide"></div>
              <div className="SubDepartment__ContentHeading">
                {subDepartment.member.map((member) => (
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
