import React from "react";
import Slider from "react-slick";
import HeroItem from "./HeroItem";

const settings = {
	dots: false,
	arrows: false,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
};

const Hero = () => {
	return (
		<section id="hero">
			{/* <Slider {...settings}> */}
			{/* <HeroItem /> */}
			{/* <HeroItem /> */}
			<HeroItem />
			{/* </Slider> */}
		</section>
	);
};

export default Hero;
