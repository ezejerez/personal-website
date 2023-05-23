import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

interface CarouselProps {
  children: Settings["children"];
}

export default function Carousel({ children }: CarouselProps) {
  const settings = { infinite: true, speed: 500, slidesToShow: 1, slidesToScroll: 1 };

  return <Slider {...settings}>{children}</Slider>;
}
