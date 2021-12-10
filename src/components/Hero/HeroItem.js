import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import Typist from "react-typist";
const resumeLink = "https://drive.google.com/file/d/1Hwg0NPynGtaqBzDbqpitgVG3n_OSWvsv/view?usp=sharing";

const HeroItem = () => {

	return (
		<div >
			<div className="hero-item" style={{ marginTop: 60 }}>
				<Typist
					avgTypingDelay={100}
					className="typist"
					cursor={{
						show: false,
					}}
				>
					<h2>
						Hi!<span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
					</h2>
					<h2 className="header">
						<br />I am Bobi <Typist.Backspace count={6} delay={500} />{" "}
						<Typist.Delay ms={500} />a{" "}
						<span
							style={{
								backgroundColor: "#40e0d0",
								color: "#000",
								paddingInline: ".2rem",
							}}
						>
							React
						</span>{" "}
						<br />
						<span
							style={{
								fontSize: "4.5rem"
							}}
						>
							Developer
						</span>
					</h2> <br />
					<a
						role="button" href={resumeLink}
						target="_blank">
						<Button
							className="resume-btn"
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
