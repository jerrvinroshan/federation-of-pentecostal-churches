import { Header } from "../../component/Header";
import { Footer } from "../../component/Footer";
import { Calendar } from "../../component/eventPage/Calendar";
import EventCalendar from "../../component/eventPage/EventCalendar";

import heroImg from "../../assets/image/heroImg.png";
import MainEvent from "../../component/eventPage/MainEvent";

const Events = () => {
  return (
    <>
      <Header
        src={heroImg}
        Header="Events"
        firstPara='The formation of a trust like the "PastorsFellowship, Fellowship of Pentecostal Church Pastors" in the 1980s reflects a significant step towards strengthening unity and support among Pentecostal pastors. This type of fellowship would have provided a platform for pastoral collaboration, spiritual encouragement, and resource sharing, which are key aspects of nurturing the growth of Pentecostal communities.'
        secondPara="The transition from the Pastors Fellowship to the Federation of Pentecostal Churches (FPC) in 3.10.2006 marked a key moment of structural and organizational development for the group. With this shift, the leadership also expanded, with several key individuals taking on roles that would help steer the vision and growth of the FPC."
      />

      <div className="Event__ContentContainer">
        <div className="Calendar__EventContainer">
          <Calendar />
          <div className="EventCalendar__Section">
            <h2 className="Heading--h3">Events</h2>
            <EventCalendar />
          </div>
        </div>
        <div className="RightSide__column">
          <div className="vrLine"></div>
          <div className="MainEvent__ContentContainer">
            <h2 className="Heading--h3">Main Event</h2>
            <MainEvent />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Events;
