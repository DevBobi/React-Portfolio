import React from "react";
import { BsCode } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";
// import { motion } from "framer-motion";

const ProjectItem = ({ image, title, gitURL, visitURL }) => {
	return (
		<div className="project-item-wrap">
			<div className="project-item">
				<div className="project-img">
					<img src={image} alt={title} />
					<div className="img-overlay"></div>
				</div>
				<h3 className="project-title">{title}</h3>
				<div className="project-control">
					<a href={visitURL} target="_blank" className="btn-project">
						<AiOutlineEye /> Visit
					</a>
					<a href={gitURL} target="_blank" className="btn-project">
						<BsCode /> Code
					</a>
				</div>
			</div>
		</div>
	);
};

export default ProjectItem;
