import { Header } from "../../component/Header";
import { Footer } from "../../component/Footer";
import { ContactSearchInput } from "../../component/contactPage/ContactSearchInput";
import { ContactMap } from "../../component/contactPage/Map";

import heroImg from "../../assets/image/heroImg.png";
import callIcon from "../../assets/icons/callBlue.svg";
import mailIcon from "../../assets/icons/mailBlue.svg";
import { ContactPopUp } from "../../component/contactPage/modal/ContactPopUp";
import MyMap from "../../component/contactPage/myMap";

const ContactUs = () => {
  return (
    <>
      <Header
        src={heroImg}
        Header="Contact us"
        firstPara="Lorem ipsum dolor sit amet consectetur. Leo tincidunt eu mauris duis ac arcu sed mi eget. Sodales ultrices sed auctor praesent ultricies amet id metus. Congue leo nulla sollicitudin aliquet lectus euismod ut. Morbi a sed risus feugiat orci sed convallis non. Nulla habitant pulvinar scelerisque cras urna curabitur metus id cras. Sit accumsan ornare pulvinar eleifend neque aliquet justo. Blandit bibendum pharetra non imperdiet sed quis tellus ultricies. Vel habitasse pretium est urna egestas id nisl. Sagittis vulputate mauris arcu enim. Ut pellentesque orci odio auctor tortor sit donec. Id magna commodo at malesuada. Fermentum est non enim nunc."
        secondPara={
          <div className="Contactus__Container">
            <a href="tel:+919587458741" className="Contactus__ContentContainer">
              <img src={callIcon} alt="Call" />
              <p className="Contactus--p">98565 47858</p>
            </a>{" "}
            <a
              href="mailto:sample@mail.com"
              className="Contactus__ContentContainer"
            >
              <img src={mailIcon} alt="Mail" />
              <p className="Contactus--p">Sample@mail.com</p>
            </a>
          </div>
        }
      />
      <div className="SearchBar__Container">
        <ContactSearchInput />
      </div>
      <ContactMap />
      <MyMap/>
      <ContactPopUp />
      <Footer />
    </>
  );
};

export default ContactUs;
