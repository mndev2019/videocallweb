// import React from 'react';
import appstore from '../../assets/images/appstore.webp'
import playstore from '../../assets/images/googleplay.webp'
import hand from '../../assets/images/hUW46dtr9qmf.svg'
import img1 from '../../assets/images/4J4v82sYFeHL.png';
import img2 from '../../assets/images/5Pkal8V8JiGo.png';
import img3 from '../../assets/images/kzQBefsYCx9H.png';
import img4 from '../../assets/images/3o1pUpWkdfAD.png';
import img5 from '../../assets/images/KXCH09VzUmYR.png';
import img6 from '../../assets/images/VSunaqx7RmU2.png';
import phoneMockup from '../../assets/images/OhllXRqzdyuK.png';
import slide1 from '../../assets/images/slide13.jpg';
import slide2 from '../../assets/images/slide12.jpg';
import slide3 from '../../assets/images/slide11.jpg';
import slide4 from '../../assets/images/slide10.jpg';
import slide5 from '../../assets/images/slide9.jpg';
import slide6 from '../../assets/images/slide8.jpg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import bannervideo from '../../assets/video/WideScreen for Website.mp4'


const Banner = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: "ease-in-out",
        });
    }, []);
    const bannerSlides = [slide1, slide2, slide3, slide4, slide5, slide6];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <>
            <section id="home" className="home-wrapper">
                <div className="custom-container">
                    <div className="row">
                        <div className="col-7 col-lg w-100">
                            <div
                                className="home-content"
                                data-aos="fade-right"
                                data-aos-duration="1000"
                                data-aos-delay="100"
                            >
                                <div className='bannertext'>
                                    <h1 className=''><img src={hand} alt="hand" /> Connect, Laugh, Repeat!
                                    </h1>
                                    <ul>
                                        <li>
                                            <p>Experience new friendships from every corner of the globe with a single click. Dive into spontaneous, one-on-one video calls—whether you’re here to share a laugh or discover new cultures, JiveCam brings it all together instantly.
                                            </p>
                                        </li>
                                    </ul>
                                    <h1 className=''> <img src={hand} alt="hand" /> Go Live & Get Paid
                                    </h1>
                                    <ul>
                                        <li>
                                            <p>Turn your passion into profit by going live. Earn money from every call you receive—creativity, humor, or insight can literally pay off.
                                            </p>
                                        </li>
                                    </ul>
                                    <h1 className=''> <img src={hand} alt="hand" /> Gifts That Make You Money
                                    </h1>
                                    <ul>
                                        <li><p> Spice up your calls with fun gifts. Each one you receive instantly converts into real cash—a playful way to make every conversation rewarding.
                                        </p></li>


                                    </ul>

                                    {/* <ul className="home-info">
                                        {[
                                            "Go Live & Get Paid",
                                            "Gifts That Make You Money",
                                            // "Share Media, Location, Contact",
                                            // "Online, Last seen & Typing"
                                        ].map((text, index) => (
                                            <li key={index}>
                                                <div className="factors">
                                                    <img src={hand} alt="hand" />
                                                    <h4>{text}</h4>
                                                </div>
                                            </li>
                                        ))}
                                    </ul> */}

                                    <div className="d-flex">
                                        <a href="#" className="btnlink">
                                            <img src={appstore} className="img-fluid" alt="App Store" />
                                        </a>
                                        <a href="#" className="btnlink">
                                            <img src={playstore} className="img-fluid" alt="Google Play" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-5">
                            <div className="home-img">
                                {[img1, img2, img3, img4, img5, img6].map((imgSrc, index) => (
                                    <img
                                        key={index}
                                        className={`img-fluid img${index + 3}`}
                                        src={imgSrc}
                                        alt={`img${index + 3}`}
                                    />
                                ))}
                                <div className="phone" id="iframeContainer">
                                    <img id="mobsize" src={phoneMockup} className="phone-image" alt="Mobile Mockup" />

                                    <div className="col-lg-6 col-md-12">
                                        <div className="banner_slider">
                                            <Slider {...settings}>
                                                {bannerSlides.map((slideSrc, index) => (
                                                    <div key={index}>
                                                        <img className="img-fluid screen-img" src={slideSrc} alt={`slide ${index + 1}`} />
                                                    </div>
                                                ))}
                                            </Slider>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='p-0'>
                <div className='MyVideo w-100 lightpink'>
                    <video
                        className="w-100 h-100"
                        autoPlay
                        loop
                        muted
                    >
                        <source src={bannervideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </section>


        </>
    );
};

export default Banner;

