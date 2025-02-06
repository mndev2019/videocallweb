// import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const User = () => {
    const settings = {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "Language Learner",
            image: "https://vue.pixelstrap.com/chitchat/_nuxt/img/3.1684d06.png",
            testimonial:
                "JiveCam has transformed how I practice languages. I've made friends from around the world and improved my speaking skills.",
        },
        {
            name: "Michael Chen",
            role: "Cultural Explorer",
            image: "https://vue.pixelstrap.com/chitchat/_nuxt/img/3.1684d06.png",
            testimonial:
                "The best platform for meeting people from different cultures. The video quality is amazing and the safety features make me feel secure.",
        },
        {
            name: "Emma Garcia",
            role: "Digital Nomad",
            image: "https://vue.pixelstrap.com/chitchat/_nuxt/img/3.1684d06.png",
            testimonial:
                "As someone who travels often, JiveCam helps me stay connected and meet new people wherever I go. The community is incredibly welcoming.",
        },
        {
            name: "Michael Chen",
            role: "Cultural Explorer",
            image: "https://vue.pixelstrap.com/chitchat/_nuxt/img/3.1684d06.png",
            testimonial:
                "The best platform for meeting people from different cultures. The video quality is amazing and the safety features make me feel secure.",
        },
    ];

    return (
        <section className="section-py-space light-bg pb-5" id="user">
            <div className="custom-container">
                <div className="container testimonial-main">
                    <div className="col-12">
                        <div className="landing-title">
                            <div className="sub-title">
                                <h4>What Our Users Say</h4>
                                <h2>Join millions finding connections on JiveCam</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <Slider {...settings} className="testimonial-slider">
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="swiper-slide screenshots">
                                    <div className="testimonial-box mt-0">
                                        <div className="test-img">
                                            <img
                                                src={testimonial.image}
                                                alt={`Testimonial Image ${index + 1}`}
                                                className="img-fluid"
                                            />
                                            <i className="test-wish">
                                                <i className="fa-solid fa-heart"></i>
                                            </i>
                                        </div>
                                        <div className="test-contain">
                                            <h4>{testimonial.name}</h4>
                                            <h3>{testimonial.role}</h3>
                                            <p>{testimonial.testimonial}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default User;

