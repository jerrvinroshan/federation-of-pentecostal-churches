import { useState } from "react";
import { Header } from "../../component/Header";
import { Footer } from "../../component/Footer";
import {SubMinistry} from "../../component/ministriesPage/SubMinistry";
import { ministries } from "../../component/ministriesPage/data/ministryData";

import heroImg from "../../assets/image/heroImg1.png";

const Ministries = () => {
  const [selectedMinistry, setSelectedMinistry] = useState(null);

  if (selectedMinistry) {
    return <SubMinistry ministry={selectedMinistry} />;
  }
  return (
    <>
      <Header
        src={heroImg}
        Header="Ministries"
        firstPara='The formation of a trust like the "PastorsFellowship, Fellowship of Pentecostal Church Pastors" in the 1980s reflects a significant step towards strengthening unity and support among Pentecostal pastors. This type of fellowship would have provided a platform for pastoral collaboration, spiritual encouragement, and resource sharing, which are key aspects of nurturing the growth of Pentecostal communities.'
        secondPara="The transition from the Pastors Fellowship to the Federation of Pentecostal Churches (FPC) in 3.10.2006 marked a key moment of structural and organizational development for the group. With this shift, the leadership also expanded, with several key individuals taking on roles that would help steer the vision and growth of the FPC."
      />
     <div className="Ministries__Container">
        {ministries.map((ministry) => (
          <div key={ministry.id} className="Ministry__ContentContainer" onClick={() => setSelectedMinistry(ministry)}>
            <img className="Ministry__ContentContainer--img" src={ministry.image} alt={ministry.ministryNamee} />
            <h3 className="Ministry__ContentContainer--h2">{ministry.ministryName}</h3>
          </div>
        ))}
      </div>
      <Footer/>
    </>
  );
};

export default Ministries;
