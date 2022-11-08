import React from 'react';
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import withAutoplay from "react-awesome-slider/dist/autoplay";



const Banner = () => {

    const AutoplaySlider = withAutoplay(AwesomeSlider);
    return (
        <AutoplaySlider
            play={true}
            cancelOnInteraction={false}
            interval={4000}
            className="h-[85vh]"
        >
            <div data-src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/photo-1542038784456-1ea8e93564.jpeg?size=690:388">
                <div className="bg-black absolute top-0 bottom-0 left-0 right-0 opacity-50"></div>
                <div className="absolute left-0 right-0 bottom-28 text-center ">
                    <h1 className="text-6xl md:text-8xl text-white ">
                        Capture Your
                    </h1>
                    <h1 className="text-4xl font-semibold text-white my-4 ">Precious</h1>
                    <h1 className="text-6xl text-white ">Moments With Us</h1>
                    <p className="text-slate-300 mt-3 hidden  md:block">
                        I work independently and specialize in personal photography. <br></br>
                        In particular, these are significant events for you or personal photoshoots.
                    </p>
                </div>
            </div>
            <div data-src="https://www.wedium.com/wp-content/uploads/2020/06/best-wedding-photographers-in-bhubaneswar-1.jpg">
                <div className="bg-black absolute top-0 bottom-0 left-0 right-0 opacity-50"></div>
                <div className="absolute left-0 right-0 bottom-28 text-center">
                    <h1 className="text-6xl md:text-8xl text-white ">
                        Capture Your
                    </h1>
                    <h1 className="text-4xl font-semibold text-white my-4 ">Precious</h1>
                    <h1 className="text-6xl text-white ">Moments With Us</h1>
                    <p className="text-slate-300 mt-3 hidden  md:block">
                        I work independently and specialize in personal photography. <br></br>
                        In particular, these are significant events for you or personal photoshoots.
                    </p>
                </div>
            </div>
            <div data-src="https://themeairfast.ru/templates/visum/img/wedding.jpg">
                <div className="bg-black absolute top-0 bottom-0 left-0 right-0 opacity-50"></div>
                <div className="absolute left-0 right-0 bottom-28 text-center">
                    <h1 className="text-6xl md:text-8xl text-white ">
                        Capture Your
                    </h1>
                    <h1 className="text-4xl font-semibold text-white my-4 ">Precious</h1>
                    <h1 className="text-6xl text-white ">Moments With Us</h1>
                    <p className="text-slate-300 mt-3 hidden  md:block">
                        I work independently and specialize in personal photography. <br></br>
                        In particular, these are significant events for you or personal photoshoots.
                    </p>
                </div>
            </div>
            <div data-src="https://themeairfast.ru/templates/visum/img/personals.jpg">
                <div className="bg-black absolute top-0 bottom-0 left-0 right-0 opacity-50"></div>
                <div className="absolute left-0 right-0 bottom-28 text-center">
                    <h1 className="text-6xl md:text-8xl text-white ">
                        Capture Your
                    </h1>
                    <h1 className="text-4xl font-semibold text-white my-4 ">Precious</h1>
                    <h1 className="text-6xl text-white "> Moments With Us</h1>
                    <p className="text-slate-300 mt-3 hidden  md:block">
                        I work independently and specialize in personal photography. <br></br>
                        In particular, these are significant events for you or personal photoshoots.
                    </p>
                </div>
            </div>
        </AutoplaySlider>
    );
};

export default Banner;