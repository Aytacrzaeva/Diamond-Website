import React from 'react';
import Slider from 'react-slick';
import './Partners.scss';
import Partner1 from "../../../../images/partners/allurez.png";
import Partner2 from "../../../../images/partners/giverns.png";
import Partner3 from "../../../../images/partners/kay.png";
import Partner4 from "../../../../images/partners/kisna.png";
import Partner5 from "../../../../images/partners/kwiat.png";
import Partner6 from "../../../../images/partners/mj.png";
import Partner7 from "../../../../images/partners/pearlmans.png";
import Partner8 from "../../../../images/partners/tacori.png";

const Partners = () => {
    const settings = {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 1500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 520,
                settings: {
                    slidesToShow: 3,
                },
            },
        ],
    };

    return (
        <div className="partners">
            <div className="contain">
                <h2 className="text-partners">Partners</h2>
                <div className="slider-container"> {/* Yeni eklenen div */}
                    <Slider {...settings}>
                        <div className="slide">
                            <img src={Partner1} alt="logo" />
                        </div>
                        <div className="slide">
                            <img src={Partner2} alt="logo" />
                        </div>
                        <div className="slide">
                            <img src={Partner3} alt="logo" />
                        </div>
                        <div className="slide">
                            <img src={Partner4} alt="logo" />
                        </div>
                        <div className="slide">
                            <img src={Partner5} alt="logo" />
                        </div>
                        <div className="slide">
                            <img src={Partner6} alt="logo" />
                        </div>
                        <div className="slide">
                            <img src={Partner7} alt="logo" />
                        </div>
                        <div className="slide">
                            <img src={Partner8} alt="logo" />
                        </div>
                    </Slider>
                </div>
            </div>

        </div>
    );
};

export default Partners;
