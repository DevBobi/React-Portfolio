import React, { useState, useEffect } from "react";
import Particles from "react-particles-js";
import { AnimatePresence } from "framer-motion";
import { animateScroll as scroll } from "react-scroll";
import FadeLoader from "react-spinners/FadeLoader";
// Components
import About from "./components/About/About";
import Project from "./components/Project/Project";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Tech from "./components/Tech/Tech";
import Contact from "./components/Contact/Contact";
import ScrollTop from "./components/ScrollTop";
import Footer from "./components/Footer/Footer";
// Style
import "./style/style.scss";
import { ReactComponent as Arrow } from "./images/ArrowTop.svg";
import AOS from "aos";
import "aos/dist/aos.css";


function App() {
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		setLoading(true)
		setTimeout(() => {
			setLoading(false)
		}, 3000)
	}, [])

	const [scrollActive, setScrollActive] = useState(false);
	const [sent, setSent] = useState(false);

	const scrollToTop = () => {
		scroll.scrollToTop();
	};

	return (
		<div >
			{
				loading ?
					<div className="App">
						<FadeLoader
							color={"#E58F00"}
							loading={loading}
							size={25} />
					</div>
					:
					<div className="main">
						<Navbar
							scrollActive={scrollActive}
							setScrollActive={setScrollActive}
							onClick={scrollToTop}
						/>
						<Particles
							className="particles-wrapper"
							canvasClassName="particles-canvas"
							params={{
								"particles": {
									"color": {
										"value": "#FF5722"
									},
									"line_linked": {
										"color": "#FF5722"
									},
									"number": {
										"value": 30

									},
									"size": {
										"value": 5
									}
								},
								"interactivity": {
									"events": {
										"onhover": {
											"enable": true,
											"mode": "repulse"
										}
									}
								}
							}}
						/>
						<Hero />
						<Project />
						<About />
						<Tech />
						<Contact setSent={setSent} />
						<AnimatePresence>
							{scrollActive && (
								<ScrollTop onClick={scrollToTop}>
									<Arrow />
								</ScrollTop>
							)}
						</AnimatePresence>
						<Footer />
					</div>
			}

		</div>
	);
}

export default App;
