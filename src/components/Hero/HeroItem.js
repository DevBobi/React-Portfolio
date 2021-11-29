import React, { useEffect } from "react";
import Typist from "react-typist";

const HeroItem = () => {
	useEffect(() => { }, []);
	return (
		<div className="hero-item" style={{ marginTop: 70 }}>
			<Typist
				avgTypingDelay={100}
				className="typist"
				cursor={{
					show: false,
					// blink: true,
					// element: "",
					// hideWhenDone: false,
					// hideWhenDoneDelay: 1000,
				}}
			>
				<h2 className="header">
					Hi, I am Bobi <Typist.Backspace count={6} delay={400} />{" "}
					<Typist.Delay ms={500} />a{" "}
					<span
						style={{
							// display: "inline-block",
							backgroundColor: "yellow",
							color: "#000",
							width: "fit-content",
							padding: "0 .5rem",
							margin: "0 .3rem",
							height: "fit-content",
						}}
					>
						Web
					</span>{" "}
					Developer
				</h2>
			</Typist>
		</div>
	);
};

export default HeroItem;
