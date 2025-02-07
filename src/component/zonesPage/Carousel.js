import { useState } from "react";
import { ZoneCard } from "./ZoneCard";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Carousel = ({data}) => {
  const itemsPerPage = 4;
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex + itemsPerPage >= data.length) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex((prevIndex) => prevIndex + itemsPerPage);
    }
  };

  const prevSlide = () => {
    if (currentIndex === 0) {
      const lastValidIndex = Math.max(data.length - itemsPerPage, 0);
      setCurrentIndex(lastValidIndex);
    } else {
      setCurrentIndex((prevIndex) => Math.max(prevIndex - itemsPerPage, 0));
    }
  };
  const currentItems = data.slice(currentIndex, currentIndex + itemsPerPage);
  return (
    <div className="Carousel__Container">
      <button  className="arrow arrowLeft" onClick={prevSlide}><KeyboardArrowUpIcon/></button>
        <div className="Carousel__ContentContainer">
          {currentItems.map((item, index) => (
            <ZoneCard
              key={index}
              pastorName={item.pastorName}
              title={item.title}
              image={item.image}
              contact={item.contact}
            />
          ))}
        </div>
      <button className="arrow arrowRight" onClick={nextSlide}><KeyboardArrowUpIcon/></button>
    </div>
  );
};

export default Carousel;