// import React from "react";
import Slider from "react-slick";
import slide1 from "../../assets/images/slide13.jpg";
import slide2 from "../../assets/images/slide12.jpg";
import slide3 from "../../assets/images/slide11.jpg";
import slide4 from "../../assets/images/slide10.jpg";
import slide5 from "../../assets/images/slide9.jpg";
import slide6 from "../../assets/images/slide8.jpg";
import yellowStar from "../../assets/images/6wlKptBDBjWA.png";
import blueStar from "../../assets/images/PonL0s22iaeG.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Screenshot = () => {
    const settings = {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const slides = [slide1, slide2, slide3, slide4, slide5, slide6];

    return (
        <section id="screenshot" className="screenshots-section section-b-space lightpink">
            <div className="custom-container">
                <div className="container">
                    <div className="col-12">
                        <div className="">
                            <div className=" text-center pb-lg-5 pb-2">
                                <div>
                                    <h4 className="title2">How It Works</h4>
                                    {/* <h2 className="subtitle">JiveCam Screenshots</h2> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <Slider {...settings} className="screenshots-slider">
                        {slides.map((slide, index) => (
                            <div key={index} className="screenshots" style={{ padding: "0 10px" }}> {/* Added padding for spacing */}
                                <img
                                    className="img-fluid screen-img"
                                    src={slide}
                                    alt={`screenshot-${index + 1}`}
                                    style={{
                                        borderRadius: "20px",
                                        width: "100%",
                                        height: "auto",
                                    }}
                                />
                            </div>
                        ))}
                    </Slider>
                    <img className="img-fluid yellow-star" src={yellowStar} alt="yellow-star" />
                    <img className="img-fluid blue-star" src={blueStar} alt="blue-star" />
                </div>
            </div>
        </section>
    );
};

export default Screenshot;
