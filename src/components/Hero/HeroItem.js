import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import Typist from "react-typist";
const resumeLink = "https://drive.google.com/file/d/1Hwg0NPynGtaqBzDbqpitgVG3n_OSWvsv/view?usp=sharing";

const HeroItem = () => {

	return (
		<div >
			<div className="hero-item" style={{ marginTop: 70 }}>
				<Typist
					avgTypingDelay={100}
					className="typist"
					cursor={{
						show: false,
					}}
				>
					<h2 className="header">
						Hi, I am Bobi
						<Typist.Backspace count={6} delay={400} />{" "}
						<Typist.Delay ms={500} />a{" "}
						<span
							style={{
								// display: "inline-block",
								backgroundColor: "#40e0d0",
								color: "#000",
								width: "fit-content",
								padding: "0 .3rem",
								margin: "0 .3rem",
								height: "fit-content",
							}}
						>
							React
						</span>{" "}
						Developer
					</h2> <br />
					<a
						role="button" href={resumeLink}
						target="_blank">
						<Button
							className="resume-btn text-center"
						>
							My Resume
						</Button>
					</a>
				</Typist>
			</div>
		</div >
	);
};

export default HeroItem;
