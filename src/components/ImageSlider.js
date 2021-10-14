import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImageSlider() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    slidesToShow: 2,
    swipeToSlide: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full mt-4 mb-7">
      <Slider {...settings}>
        {[
          "/images/slides/slide_1.png",
          "/images/slides/slide_2.png",
          "/images/slides/slide_3.png",
          "/images/slides/slide_4.png",
        ].map((item, key) => (
          <div key={key} className="px-2 outline-none">
            <img
              src={item}
              alt="slide-item"
              className="w-full object-cover min-h-[150px] rounded-xl"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ImageSlider;
