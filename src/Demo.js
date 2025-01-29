import { MenuNavbar } from "./component/MenuNavbar";
import { Navbar } from "./component/Navbar";
import heroImg from "./assets/image/heroImg.png";
import { Header } from "./component/Header";
import { BigCardImg } from "./component/Cards";
import Img from './assets/image/heroImg.png'

function Demo() {
  return (
    <>
      <Navbar />
      <MenuNavbar />
      <Header
        src={heroImg}
        Header="About us"
        firstPara='The formation of a trust like the "PastorsFellowship, Fellowship of Pentecostal Church Pastors" in the 1980s reflects a significant step towards strengthening unity and support among Pentecostal pastors. This type of fellowship would have provided a platform for pastoral collaboration, spiritual encouragement, and resource sharing, which are key aspects of nurturing the growth of Pentecostal communities.'
        secondPara='The transition from the Pastors Fellowship to the Federation of Pentecostal Churches (FPC) in 3.10.2006 marked a key moment of structural and organizational development for the group. With this shift, the leadership also expanded, with several key individuals taking on roles that would help steer the vision and growth of the FPC.'
      />
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <BigCardImg src={Img} name="Pr. Raja" title="President"/>
    </>
  );
}

export default Demo;
