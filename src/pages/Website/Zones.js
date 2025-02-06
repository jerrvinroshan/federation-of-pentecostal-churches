import { Header } from "../../component/Header";
import { Footer } from "../../component/Footer";
import HeadingCarousel from "../../component/zonesPage/HeadingCarousel";
import { ColachelData } from "../../component/zonesPage/data/ColachelData";

import heroImg from "../../assets/image/heroImg.png";

const Zones = () => {
  return (
    <>
      <Header
        src={heroImg}
        Header="Zones"
        firstPara="Zones is to helps pastors from specific areas come together for prayer, fellowship, and other church activities. It also fosters strong relationships between pastors and believers, allowing them to share Christ's love, especially during difficult times."
      />
      <div className="ZonesContent__Container">
        <HeadingCarousel zoneName="Colachel" data={ColachelData} />
      </div>
      <Footer />
    </>
  );
};

export default Zones;
