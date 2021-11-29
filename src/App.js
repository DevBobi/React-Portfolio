import React, { useState, useEffect } from "react";
import Particles from "react-particles-js";
import { AnimatePresence } from "framer-motion";
import { animateScroll as scroll } from "react-scroll";
import DotLoader from "react-spinners/DotLoader";
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
import react from "./images/react.png";
import mongoDb from "./images/mongoDb.png";
import js from "./images/js.svg";
import nodejs from "./images/nodejs.png";
import { ReactComponent as Arrow } from "./images/ArrowTop.svg";
import Popup from "./components/Popup";

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

	useEffect(() => {
		setTimeout(closePopup, 4000);
	}, [sent]);

	const scrollToTop = () => {
		scroll.scrollToTop();
	};

	const closePopup = () => {
		setSent(false);
	};

	return (
		<div >
			{
				loading ?
					<div className="App">
						<DotLoader
							color={"#E58F00"}
							loading={loading}
							size={100} />
					</div>
					:
					<div className="main">
						<Particles
							className="particles-wrapper"
							canvasClassName="particles-canvas"
							params={{
								particles: {
									number: {
										value: 2,
										density: {
											enable: true,
											value_area: 800,
										},
									},
									line_linked: {
										enable: false,
									},
									move: {
										speed: 1,
										out_mode: "out",
									},
									shape: {
										type: ["image"],
										image: [
											{
												src: react,
												height: 36,
												width: 36,
											},
											{
												src: mongoDb,
												height: 36,
												width: 36,
											},
											{
												src: js,
												height: 36,
												width: 36,
											},
											{
												src: nodejs,
												height: 36,
												width: 36,
											},
										],
									},
									color: {
										value: "#CCC",
									},
									size: {
										value: 30,
										random: false,
										anim: {
											enable: true,
											speed: 4,
											size_min: 10,
											sync: false,
										},
									},
								},
								retina_detect: false,
							}}
						/>
						<Navbar
							scrollActive={scrollActive}
							setScrollActive={setScrollActive}
							onClick={scrollToTop}
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
						<AnimatePresence>
							{sent && <Popup closePopup={closePopup} />}
						</AnimatePresence>
						<Footer />
					</div>
			}

		</div>
	);
}

export default App;
