import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { PortfolioCard } from "../../../pages/homepage/components/portfolio-section/PortfolioSection";
import { PortfolioItem } from "../../../models/portfolio.model";

type SlickImagesProps = {
  children?: React.ReactNode;
  items?: string[];
};

export const SlickImagesCarousel: React.FC<SlickImagesProps> = ({ items }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {items?.map((item, index) => (
        <img
          key={index}
          className="d-block w-100"
          src={`/public/images/portfolio/${item}`}
        />
      ))}
    </Slider>
  );
};

type ReactSlickCarouselProps = {
  children?: React.ReactNode;
  items: PortfolioItem[];
};

export const SlickPortfolioCarousel: React.FC<ReactSlickCarouselProps> = ({
  items,
}) => {
  const settings = {
    dots: true,
    infinite: true,
    adaptiveHeight: false,
    speed: 500,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {items.map((item, index) => (
        <div
          key={index}
          className="col-lg-4 col-md-6 portfolio-item filter-app"
        >
          <PortfolioCard
            img={item.img}
            title={item.title}
            category={item.category}
            tags={item.tags}
            id={item.id}
            projectStartDate={item.projectStartDate}
            projectEndDate={item.projectEndDate}
          />
        </div>
      ))}
    </Slider>
  );
};
