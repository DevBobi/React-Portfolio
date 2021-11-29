import React from "react";
import { motion } from "framer-motion";
import { MdClose, MdCode } from "react-icons/md";
import { Link as LinkS } from "react-scroll";

const ToggleNav = ({ toggle, onClick }) => {
	return (
		<motion.div
			initial={{ y: 1.2, scale: 0 }}
			animate={{ y: toggle ? 0 : 1, scale: toggle ? 1 : 0 }}
			className={`nav-bg ${toggle ? "active" : ""}`}
			onClick={onClick}
		>
			<div className="nav-close">
				<MdClose />
			</div>
			<div className="nav-toggle">
				<div className="nav-img">
					<MdCode />
				</div>
				<div className="nav-control">
					<h1 className="header">Dev Bobi</h1>
					<ul className="nav-menu">
						<li className="nav-item">
							<LinkS
								to="project"
								spy={true}
								smooth={true}
								offset={-65}
								exact="true"
								duration={500}
								className="nav-link"
								onClick={onClick}
							>
								<span>03</span>Projects
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
								onClick={onClick}
							>
								<span>01</span> About
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
								onClick={onClick}
							>
								<span>02</span>Services
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
								onClick={onClick}
							>
								<span>04</span>Contact
							</LinkS>
						</li>
					</ul>
				</div>
			</div>
		</motion.div>
	);
};

export default ToggleNav;
