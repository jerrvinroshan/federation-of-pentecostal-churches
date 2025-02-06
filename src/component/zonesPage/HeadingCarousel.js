// import {data} from '../zonesPage/data/ColachelData'
import Carousel from "./Carousel";
const HeadingCarousel = (props) => {
  return (
    <div className="HeadingCarousel__Container">
      <h2 className="HeadingCarousel__Heading">{props.zoneName}</h2>
      <Carousel data={props.data} />
    </div>
  );
};

export default HeadingCarousel;
