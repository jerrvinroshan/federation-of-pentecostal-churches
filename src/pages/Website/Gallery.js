import { Header } from "../../component/Header";
import { Footer } from "../../component/Footer";

import heroImg from "../../assets/image/heroImg.png";
import GalleryImg from "../../component/galleryPage/GalleryImg";

const Gallery = () => {
  return (
    <>
      <Header
        src={heroImg}
        Header="Gallery"
        firstPara="Lorem ipsum dolor sit amet consectetur. Leo tincidunt eu mauris duis ac arcu sed mi eget. Sodales ultrices sed auctor praesent ultricies amet id metus. Congue leo nulla sollicitudin aliquet lectus euismod ut. Morbi a sed risus feugiat orci sed convallis non. Nulla habitant pulvinar scelerisque cras urna curabitur metus id cras. Sit accumsan ornare pulvinar eleifend neque aliquet justo. Blandit bibendum pharetra non imperdiet sed quis tellus ultricies. Vel habitasse pretium est urna egestas id nisl. Sagittis vulputate mauris arcu enim. Ut pellentesque orci odio auctor tortor sit donec. Id magna commodo at malesuada. Fermentum est non enim nunc."
      />
      <div className="GalleryContent__Container">
        <GalleryImg />
      </div>
      <Footer />
    </>
  );
};

export default Gallery;
