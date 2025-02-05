import { Header } from "../../component/Header";
import { BigCard4grid } from "../../component/Cards";

import heroImg from "../../assets/image/heroImg1.png";
import ministry from "../../assets/image/ministry.png";
import { Footer } from "../../component/Footer";

const Ministries = () => {
  return (
    <>
      <Header
        src={heroImg}
        Header="Ministries"
        firstPara='The formation of a trust like the "PastorsFellowship, Fellowship of Pentecostal Church Pastors" in the 1980s reflects a significant step towards strengthening unity and support among Pentecostal pastors. This type of fellowship would have provided a platform for pastoral collaboration, spiritual encouragement, and resource sharing, which are key aspects of nurturing the growth of Pentecostal communities.'
        secondPara="The transition from the Pastors Fellowship to the Federation of Pentecostal Churches (FPC) in 3.10.2006 marked a key moment of structural and organizational development for the group. With this shift, the leadership also expanded, with several key individuals taking on roles that would help steer the vision and growth of the FPC."
      />
      <div className="SecondarySection__Container">
        <BigCard4grid link='#' src={ministry}
        title='Children'/>
        <BigCard4grid link='#' src={ministry}
        title='Children'/>
        <BigCard4grid link='#' src={ministry}
        title='Children'/>
      </div>
      <Footer/>
    </>
  );
};

export default Ministries;
