import { useState } from "react";
import { Header } from "../../component/Header";
import { SubCommission } from "../../component/commissionPage/subCommission";
import { commission } from "../../component/commissionPage/data/commissionData";
import { Footer } from "../../component/Footer";

import heroImg from "../../assets/image/heroImg1.png";

const Commissions = () => {
  const [selectedCommission, setSelectedCommission] = useState(null);
  if (selectedCommission) {
    return <SubCommission commission={selectedCommission} />;
  }
  return (
    <>
      <Header
        src={heroImg}
        Header="Commissions"
        firstPara='The formation of a trust like the "PastorsFellowship, Fellowship of Pentecostal Church Pastors" in the 1980s reflects a significant step towards strengthening unity and support among Pentecostal pastors. This type of fellowship would have provided a platform for pastoral collaboration, spiritual encouragement, and resource sharing, which are key aspects of nurturing the growth of Pentecostal communities.'
        // secondPara="The transition from the Pastors Fellowship to the Federation of Pentecostal Churches (FPC) in 3.10.2006 marked a key moment of structural and organizational development for the group. With this shift, the leadership also expanded, with several key individuals taking on roles that would help steer the vision and growth of the FPC."
      />

      <div className="CommissionSecondarySection__Container">
        {commission.map((commission) => (
          <div
            key={commission.id}
            className="Commission__ContentContainer"
            onClick={() => setSelectedCommission(commission)}
          >
            <img
              className="Commission__ContentContainer--img"
              src={commission.image}
              alt={commission.commissionName}
            />
            <h3 className="Commission__ContentContainer--h2">
              {commission.commissionName}
            </h3>
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
};

export default Commissions;
