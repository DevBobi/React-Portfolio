import React from "react";
import Slider from "react-slick";
import { MdWebAsset } from "react-icons/md";
import { BsGear } from "react-icons/bs";
import TechItem from "./TechItem";
import { techObj } from "./techObj";
import { ReactComponent as Rocket } from "./Rocket.svg";

const settings = {
	dots: false,
	arrows: false,
	infinite: true,
	slidesToShow: 4,
	slidesToScroll: 1,
	// swipeToSlide: true,
	autoplay: true,
	speed: 5000,
	autoplaySpeed: 1000,
	cssEase: "linear",
	responsive: [
		{
			breakpoint: 700,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
				dots: true,
			},
		},
		{
			breakpoint: 500,
			settings: {
				speed: 5000,
				slidesToShow: 2,
				slidesToScroll: 1,
				initialSlide: 2,
			},
		},
		{
			breakpoint: 360,
			settings: {
				speed: 5000,
				slidesToShow: 2,
				slidesToScroll: 1,
			},
		},
	],
};

const Tech = () => {
	return (
		<section id="tech">
			<div className="tech-wrapper">
				<span className="tech-rocket">
					<Rocket />
				</span>

				<h2 className="tech-header">Technologies I Use</h2>

				<div className="tech-box">
					<div className="tech-card">
						<span className="frontend">
							<MdWebAsset />
						</span>
						<h3 className="card-header">Frontend</h3>
						<p className="card-text">HTML5</p>
						<p className="card-text">CSS3 | MUI | Bootstrap</p>
						<p className="card-text">Javascript</p>
						<p className="card-text">React | Redux</p>
					</div>
					<div className="tech-card">
						<span className="backend">
							<BsGear />
						</span>
						<h3 className="card-header">Backend</h3>
						<p className="card-text">Node</p>
						<p className="card-text">Express</p>
						<p className="card-text">MongoDB</p>
						<p className="card-text">Rest Api</p>
					</div>
				</div>

				<Slider {...settings}>
					{techObj.map((item, index) => (
						<TechItem key={index} icon={item.icon} text={item.text} />
					))}
				</Slider>
			</div>
		</section>
	);
};

export default Tech;
