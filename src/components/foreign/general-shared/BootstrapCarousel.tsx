import Carousel from "react-bootstrap/Carousel";

type BootstrapCarouselProps = {
  images?: string[];
  title?: string;
  description?: string;
};

function BootstrapCarousel({
  images,
  title,
  description,
}: BootstrapCarouselProps) {
  return (
    <Carousel>
      {images?.map((img) => (
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={`/images/portfolio/${img}`}
            alt={title}
          />
          <Carousel.Caption>
            <h3>{title}</h3>
            <p>{description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default BootstrapCarousel;
