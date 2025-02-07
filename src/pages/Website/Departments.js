import { useState } from "react";
import { Header } from "../../component/Header";
import { SubDepartment } from "../../component/departmentPage/SubDepartment";
import { Footer } from "../../component/Footer";
import { department } from "../../component/departmentPage/data/departmentData";

import heroImg from "../../assets/image/heroImg.png";

const Department = () => {
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  if (selectedDepartment) {
    return <SubDepartment department={selectedDepartment} />;
  }
  return (
    <>
      <Header
        src={heroImg}
        Header="Departments"
        firstPara="Departments are the backbone of the FPC. The efficient functioning of all these departments contributes to the overall development of the FPC at every level."
      />
      <div className="DepartmentSecondarySection__Container">
        {department.map((department) => (
          <div
            key={department.id}
            className="Department__ContentContainer"
            onClick={() => setSelectedDepartment(department)}
          >
            <img
              className="Department__ContentContainer--img"
              src={department.image}
              alt={department.departmentName}
            />
            <h3 className="Department__ContentContainer--h2">
              {department.departmentName}
            </h3>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Department;
