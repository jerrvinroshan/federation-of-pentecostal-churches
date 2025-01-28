import EventCard from "./component/EventCard";
import { MenuNavbar } from "./component/MenuNavbar";
import { Navbar } from "./component/Navbar";
import img from "./assets/image/logo.svg";
import { HomeHeroBig, HomeHeroSmall } from "./component/HomeHero";
import heroImg from "./assets/image/home-img.png";
import heroImage from "./assets/image/home-img1.png";

function Demo() {
  return (
    <>
      <Navbar />
      <MenuNavbar />
      <br />
      <div style={{display:"flex"}}>
        <HomeHeroBig style={{flex:"1 2 959px"}}
          src={heroImage}
          alt="Image"
          Title="House Church Network Sees Growth, Miracles, and Salvations Across Metro Detroit"
        />
        <div style={{display:"flex", flexDirection:"column"}}>
          <HomeHeroSmall style={{flex:"1 2 531px"}}
            src={heroImg}
            alt="Image"
            Title="South Carolina Children’s Ministry Experiences Holy Spirit Outpouring"
          />
          <HomeHeroSmall
            src={heroImg}
            alt="Image"
            Title="South Carolina Children’s Ministry Experiences Holy Spirit Outpouring"
          />
        </div>
      </div>
      <br />
      <EventCard
        EventName="Coffee"
        date="14/07/24"
        startTime="9.00 AM"
        endTime="10.30 AM"
        location="Kanyakumari"
        description="Event Details for whom this event like any specific ministry"
        src={img}
        alt="Coffee event"
      />
    </>
  );
}

export default Demo;
