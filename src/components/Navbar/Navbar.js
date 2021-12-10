import React, { useState, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link as LinkS } from "react-scroll";
import ToggleNav from "./ToggleNav";

const Navbar = ({ scrollActive, setScrollActive, onClick }) => {
	const [toggle, setToggle] = useState(false);

	const changeNav = () => {
		if (window.scrollY >= 80) {
			setScrollActive(true);
		} else {
			setScrollActive(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", changeNav);
	}, []);

	const handleNavToggle = () => {
		setToggle(!toggle);
	};

	return (
		<nav className={`${scrollActive ? "active" : ""}`}>
			<div className="nav-container">
				<h2 className="nav-logo" onClick={onClick}>

					<span
						style={{
							backgroundColor: "#40e0d0",
							color: "#000",
							borderRadius: "2px"

						}}
					>
						Dev
					</span>
					<span>Bobi</span>
				</h2>
				<ul className="nav-menu">
					<li className="nav-item">
						<LinkS
							to="project"
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
							exact="true"
							// delay={1000}
							className="nav-link"
						>
							Projects
						</LinkS>
					</li>
					<li className="nav-item">
						<LinkS
							to="about"
							spy={true}
							smooth={true}
							offset={-65}
							exact="true"
							duration={500}
							className="nav-link"
						>
							About
						</LinkS>
					</li>
					<li className="nav-item">
						<LinkS
							to="tech"
							spy={true}
							smooth={true}
							offset={-65}
							exact="true"
							duration={500}
							className="nav-link"
						>
							Services
						</LinkS>
					</li>
					<li className="nav-item">
						<LinkS
							to="contact"
							spy={true}
							smooth={true}
							offset={-65}
							exact="true"
							duration={800}
							className="nav-link"
						>
							Contact
						</LinkS>
					</li>
					{/* <li className="nav-item">
						<LinkS disabled className="nav-link">
							Blog
						</LinkS>
					</li> */}
				</ul>
				<div className="nav-open" onClick={handleNavToggle}>
					<AiOutlineMenu />
				</div>
			</div>
			<ToggleNav onClick={handleNavToggle} toggle={toggle} />
		</nav>
	);
};

export default Navbar;
