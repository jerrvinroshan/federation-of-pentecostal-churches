import { HomeHeroBig, HomeHeroSmall } from "../../component/HomeHero";
import {
  AboutusChurch,
  BigCard,
  SmallCard,
} from "../../component/HomeSecondary";
import {
  BigCardImgBg,
  SmallCardImg,
  SmallCardImgBg,
  EventCard
} from "../../component/Cards";
import { Footer } from "../../component/Footer";

import heroImg from "../../assets/image/home-img.png";
import heroImage from "../../assets/image/home-img1.png";
import EventImg from '../../assets/image/event-title.png'

const Home = () => {
  return (
    <>
      <div className="HomeHeroSection__Container">
        <HomeHeroBig
          src={heroImage}
          alt="Image"
          Title="House Church Network Sees Growth, Miracles, and Salvations Across Metro Detroit"
          link="#"
        />
        <div className="HomeHeroSection__Container column">
          <HomeHeroSmall
            src={heroImg}
            alt="Image"
            Title="South Carolina Children’s Ministry Experiences Holy Spirit Outpouring"
            link="#"
          />
          <HomeHeroSmall
            src={heroImg}
            alt="Image"
            Title="South Carolina Children’s Ministry Experiences Holy Spirit Outpouring"
          />
        </div>
      </div>

      {/* Secondary Section */}
      <div className="HomeSecondarySection__Container">
        <AboutusChurch />
        <div className="HomeSecondarySection__ContainerColumn">
          <SmallCard />
          <BigCard />
        </div>
      </div>

      {/* Third Section */}

      <div className="HomeCommonSection__Container HomeThirdSection__Container">
        <h2 className="Home__Heading--h2">Ministries</h2>
        <div className="HomeCommonSection__ContentContainer HomeThirdSection__ContentContainer">
          <SmallCardImgBg href="#" src={heroImage} title="Children" />
          <SmallCardImgBg href="#" src={heroImage} title="Men" />
          <SmallCardImgBg href="#" src={heroImage} title="Bible" />
          <SmallCardImgBg href="#" src={heroImage} title="Adults" />
        </div>
      </div>

      {/* Forth Section */}

      <div className="HomeCommonSection__Container HomeForthSection__Container">
        <h2 className="Home__Heading--h2">Council Member</h2>
        <div className="HomeCommonSection__ContentContainer HomeForthSection__ContentContainer">
          <SmallCardImg src={heroImage} name="Pr. Raja" title="President" />
          <SmallCardImg src={heroImage} name="Pr.Name" title="president" />
          <SmallCardImg src={heroImage} name="Pr.Name" title="president" />
          <SmallCardImg src={heroImage} name="Pr.Name" />
        </div>
      </div>
      {/* Fifth Section */}
      <div className="HomeFithSection__Container">
        <div className="HomeFifthSection__CommonContainer HomeFifthSection__EventContainer">
          <h2 className="Home__Heading--h2">Events</h2>
          <div className="HomeCommonSection__FifthContentContainer HomeFifthSection__EventContentContainer">
            <EventCard
              EventName="Coffee"
              date="14/07/24"
              startTime="9.00 AM"
              endTime="10.30 AM"
              location="Kanyakumari"
              description="Event Details for whom this event like any specific ministry"
              src={EventImg}
              alt="Coffee event"
            />{" "}
            <EventCard
              EventName="Coffee"
              date="14/07/24"
              startTime="9.00 AM"
              endTime="10.30 AM"
              location="Kanyakumari"
              description="Event Details for whom this event like any specific ministry"
              src={EventImg}
              alt="Coffee event"
            />
            <EventCard
              EventName="Coffee"
              date="14/07/24"
              startTime="9.00 AM"
              endTime="10.30 AM"
              location="Kanyakumari"
              description="Event Details for whom this event like any specific ministry"
              src={EventImg}
              alt="Coffee event"
            />
            <EventCard
              EventName="Coffee"
              date="14/07/24"
              startTime="9.00 AM"
              endTime="10.30 AM"
              location="Kanyakumari"
              description="Event Details for whom this event like any specific ministry"
              src={EventImg}
              alt="Coffee event"
            />
            <EventCard
              EventName="Coffee"
              date="14/07/24"
              startTime="9.00 AM"
              endTime="10.30 AM"
              location="Kanyakumari"
              description="Event Details for whom this event like any specific ministry"
              src={EventImg}
              alt="Coffee event"
            />
            <EventCard
              EventName="Coffee"
              date="14/07/24"
              startTime="9.00 AM"
              endTime="10.30 AM"
              location="Kanyakumari"
              description="Event Details for whom this event like any specific ministry"
              src={EventImg}
              alt="Coffee event"
            />
          </div>
        </div>
        <br />
        <div className="HomeFifthSection__CommonContainer HomeFifthSection__DepartmentContainer">
          <h2 className="Home__Heading--h2">Department</h2>
          <div className="HomeCommonSection__FifthContentContainer HomeFifthSection__DepartmentContentContainer">
            <BigCardImgBg href="#" src={heroImage} title="Children" />
            <BigCardImgBg href="#" src={heroImage} title="Children" />
            <BigCardImgBg href="#" src={heroImage} title="Children" />
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Home;
