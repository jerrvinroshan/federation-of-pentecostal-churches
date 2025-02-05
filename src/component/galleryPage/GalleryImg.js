import { useState } from "react";
import galleryImg from "./galleryData";


const GalleryImg = () => {
  const [img] = useState(galleryImg);

  return (
    <div className="GalleryImg__Container">
      {img.map((img) => (
        <img key={img.id} img={img} alt={img.alt} src={img.image} className="GalleryImg-img"/>
      ))}
    </div>
  );
};

export default GalleryImg;
