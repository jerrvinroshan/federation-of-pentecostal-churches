import { Header } from "../../component/Header";
import heroImg from "../../assets/image/CouncilImg.png";
import { CouncilCard, SmallCardImg } from "../../component/Cards";
import { Footer } from "../../component/Footer";

const Councils = () => {
  return (
    <>
      <Header
        src={heroImg}
        Header="Councils"
        firstPara='The formation of a trust like the "PastorsFellowship, Fellowship of Pentecostal Church Pastors" in the 1980s reflects a significant step towards strengthening unity and support among Pentecostal pastors. This type of fellowship would have provided a platform for pastoral collaboration, spiritual encouragement, and resource sharing, which are key aspects of nurturing the growth of Pentecostal communities.'
        secondPara="The transition from the Pastors Fellowship to the Federation of Pentecostal Churches (FPC) in 3.10.2006 marked a key moment of structural and organizational development for the group. With this shift, the leadership also expanded, with several key individuals taking on roles that would help steer the vision and growth of the FPC."
      />
      <div className="CouncilMember__MarginTop">
        <CouncilCard
          src={heroImg}
          name="Rev. Pr. I. Vinil Sathish"
          title="President"
          detail="Lorem ipsum dolor sit amet consectetur. Leo tincidunt eu mauris duis ac arcu sed mi eget. Sodales ultrices sed auctor praesent ultricies amet id metus. Congue leo nulla sollicitudin aliquet lectus euismod ut. Morbi a sed risus feugiat orci sed convallis non. Nulla habitant pulvinar scelerisque cras urna curabitur metus id cras. Sit accumsan ornare pulvinar eleifend neque aliquet justo. Blandit bibendum pharetra non imperdiet sed quis tellus ultricies. Vel habitasse pretium est urna egestas id nisl. Sagittis vulputate mauris arcu enim. Ut pellentesque orci odio auctor tortor sit donec. Id magna commodo at malesuada. Fermentum est non enim nunc."
        />
      </div>
      <div className="CouncilsSection__MemberContainer">
        <SmallCardImg
          radiusValue="small"
          src={heroImg}
          name="Pr. Name"
          title="President"
        />
        <SmallCardImg
          radiusValue="small"
          src={heroImg}
          name="Pr. Name"
          title="President"
        />
        <SmallCardImg
          radiusValue="small"
          src={heroImg}
          name="Pr. Name"
          title="President"
        />
        <SmallCardImg
          radiusValue="small"
          src={heroImg}
          name="Pr. Name"
          title="President"
        />
      </div>
      <div className="CouncilsSection__Container">
        <h2 className="Heading--h2">Other Member</h2>
        <div className="CouncilsSection__ContentContainer">
          <SmallCardImg
            radiusValue="small"
            src={heroImg}
            name="Pr. Name"
            title="President"
          />
          <SmallCardImg
            radiusValue="small"
            src={heroImg}
            name="Pr. Name"
            title="President"
          />
          <SmallCardImg
            radiusValue="small"
            src={heroImg}
            name="Pr. Name"
            title="President"
          />
          <SmallCardImg
            radiusValue="small"
            src={heroImg}
            name="Pr. Name"
            title="President"
          />
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Councils;
