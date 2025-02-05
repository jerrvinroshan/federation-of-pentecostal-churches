import { Header } from '../../component/Header';

import heroImg from '../../assets/image/heroImg.png'
import { Footer } from '../../component/Footer';

const Zones = () => {
  return (
    <>
      <Header
        src={heroImg}
        Header="Zones"
        firstPara="Zones is to helps pastors from specific areas come together for prayer, fellowship, and other church activities. It also fosters strong relationships between pastors and believers, allowing them to share Christ's love, especially during difficult times."
        />
        <Footer/>
    </>
  );
};

export default Zones;
