import {
  AboutCardBig,
  AboutCardSmall,
  BigCardImg,
  CommonCard,
  SmallCardImg,
} from "../../component/Cards";
import { Header } from "../../component/Header";

import Img from "../../assets/image/home-img1.png";
import heroImg from "../../assets/image/heroImg.png";
import { Footer } from "../../component/Footer";

const AboutUs = () => {
  return (
    <>
      <Header
        src={heroImg}
        Header="About us"
        firstPara='The formation of a trust like the "PastorsFellowship, Fellowship of Pentecostal Church Pastors" in the 1980s reflects a significant step towards strengthening unity and support among Pentecostal pastors. This type of fellowship would have provided a platform for pastoral collaboration, spiritual encouragement, and resource sharing, which are key aspects of nurturing the growth of Pentecostal communities.'
        secondPara="The transition from the Pastors Fellowship to the Federation of Pentecostal Churches (FPC) in 3.10.2006 marked a key moment of structural and organizational development for the group. With this shift, the leadership also expanded, with several key individuals taking on roles that would help steer the vision and growth of the FPC."
      />

      {/*  */}
      <div className="AboutUsCard ">
        <AboutCardBig
          name="Rev. Dr. Y.S. Devasunderam (Late)"
          para1=" President. Purus integer semper condimentum vel magna dignissim. Ultrices neque mattis pellentesque massa commodo pellentesque. Pellentesque urna in suspendisse malesuada auctor. Dui pharetra et quis vitae ornare leo. Diam mi vel molestie dolor. Eget et dui condimentum dolor venenatis metus quam imperdiet tempus. In elit a diam dolor eleifend volutpat nulla. Faucibus blandit scelerisque nibh enim. Urna commodo hac magna rhoncus vel pellentesque. Sollicitudin viverra sed facilisi enim risus pellentesque sit amet tellus. Netus non risus imperdiet nulla mi mollis sit massa."
          para2="Non ullamcorper dolor risus ut commodo ullamcorper eu massa. Eget tristique rhoncus commodo dolor nisl aliquet. Est molestie platea tincidunt nisl pellentesque suscipit lectus maecenas nulla. Vel montes velit nisl scelerisque blandit volutpat tempus volutpat imperdiet. Etiam ut orci nascetur mattis lorem. Mauris et pellentesque nam non. At malesuada in lorem pharetra tortor. Adipiscing consequat proin pharetra nunc vestibulum blandit porttitor. Commodo nisl vitae eu ac eu sagittis volutpat. Neque pellentesque aliquet lacinia vitae tellus viverra. Viverra facilisi ornare pellentesque amet ac etiam tempor. Sed id lacus lacus tellus."
          src={Img}
        />
      </div>
      {/* Our Leadership */}
      <div className="AboutSection__Container leaderShipSection__Container">
        <h2 className="Heading--h2">Our Leadership</h2>
        <div className="AboutSection__ContentContainer leaderShipSection__ContentContainer">
          <SmallCardImg src={Img} name="Pr.Name" title="President" />
          <SmallCardImg src={Img} name="Pr.Name" title="President" />
          <SmallCardImg src={Img} name="Pr.Name" title="President" />
          <SmallCardImg src={Img} name="Pr.Name" title="President" />
        </div>
      </div>
      {/* Committee Members  */}
      <div className="AboutSection__Container committeeMemberSection__Container">
        <h2 className="Heading--h2">Our Leadership</h2>
        <div className="AboutSection__ContentContainer committeeMemberSection__ContentContainer">
          <SmallCardImg src={Img} name="Pr.Name" />
          <SmallCardImg src={Img} name="Pr.Name" />
          <SmallCardImg src={Img} name="Pr.Name" />
          <SmallCardImg src={Img} name="Pr.Name" />
          <SmallCardImg src={Img} name="Pr.Name" />
          <SmallCardImg src={Img} name="Pr.Name" />
          <SmallCardImg src={Img} name="Pr.Name" />
        </div>
      </div>

      {/*  */}
      <div className="AboutUsCard">
        <AboutCardSmall
          src={Img}
          para1="This leadership structure suggests a well-organized initiative aimed at fostering growth, collaboration, and deeper spiritual engagement within the Pentecostal community."
          para2="The affiliation of FPC as the Kanyakumari Diocese of SPC by the Synod of Pentecostal Churches indicates a recognition of its position within the broader Christian community and a deeper commitment to theological and ecclesiastical structure."
          para3="Also, the fact that FPC became a member of the UCC (United Christian Churches) and the KTTCF (Kanyakumari District Christian Fellowship) highlights its broader ecumenical involvement, facilitating connections with other Christian groups and enabling the sharing of resources, ideas, and support."
          para4="This kind of growth and affiliation signifies a progressive move towards stronger inter-church unity, theological collaboration, and mutual support, which is critical in maintaining a vibrant and impactful ministry in the region."
          para5="FPC has a dedicated leadership team focused on guiding and supporting the organization. Each member plays a crucial role in overseeing different departments and ensuring that the group's mission and vision are fulfilled through their advice and prayers. Together, their collective efforts aim to advance FPC to the next level, fostering growth and implementing positive changes within the community."
        />
      </div>

      {/* Our Leaders Section */}
      <div className="AboutSection__Container leaderSection__Container">
        <h2 className="Heading--h2">Our Leaders</h2>
        <div className="AboutSection__ContentContainer leaderSection__ContentContainer">
          <BigCardImg src={Img} name="Pr. Raja" title="President" />
          <BigCardImg src={Img} name="Pr. Raja" title="President" />
          <BigCardImg src={Img} name="Pr. Raja" title="President" />
          <BigCardImg src={Img} name="Pr. Raja" title="President" />
          <BigCardImg src={Img} name="Pr. Raja" title="President" />
          <BigCardImg src={Img} name="Pr. Raja" title="President" />
          <BigCardImg src={Img} name="Pr. Raja" title="President" />
          <BigCardImg src={Img} name="Pr. Raja" title="President" />
          <BigCardImg src={Img} name="Pr. Raja" title="President" />
        </div>
      </div>
      <div className="MissionVisionSection__Container">
        <h2 className="Heading--h2">Mission and Visions</h2>
        <div className="MissionVisionSection__ContentContainer">
          <CommonCard
            title="Mission"
            titleColor="yellow"
            no1="Spreading words of god"
            no2="Educate the children to be a good person"
            no3="Making children to read bible"
            no4="Educate adults about god ways"
            no5="Educate the children to be a good person"
            no6="Educate the children to be a good person"
            no7="Educate the children to be a good person"
          />
          <CommonCard
            title="Vision"
            titleColor="red"
            no1="Spreading words of god"
            no2="Educate the children to be a good person"
            no3="Making children to read bible"
            no4="Educate adults about god ways"
            no5="Educate the children to be a good person"
            no6="Educate the children to be a good person"
            no7="Educate the children to be a good person"
          />
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default AboutUs;
