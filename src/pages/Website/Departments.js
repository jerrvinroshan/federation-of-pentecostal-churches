import { Header } from "../../component/Header";
import { SmallCard3grid } from "../../component/Cards";

import heroImg from "../../assets/image/heroImg.png";
import deaprtment from '../../assets/image/ministry.png'
import { Footer } from "../../component/Footer";

const Department = () => {
  return (
    <>
      <Header
        src={heroImg}
        Header='Departments'
        firstPara="Departments are the backbone of the FPC. The efficient functioning of all these departments contributes to the overall development of the FPC at every level."
      />
      <div className="SecondarySection__Container">
        <SmallCard3grid link="#" src={deaprtment} title="Election Commission" />
        <SmallCard3grid link="#" src={deaprtment} title="Election Commission" />
        <SmallCard3grid link="#" src={deaprtment} title="Election Commission" />
        <SmallCard3grid link="#" src={deaprtment} title="Missionary Ministry Development" />
      </div>
      <Footer/>
    </>
  );
};

export default Department;
