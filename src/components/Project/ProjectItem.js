import React from "react";
import { BsCode } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";

const ProjectItem = ({ image, title, gitURL, visitURL }) => {
	return (
		<div
			data-aos="fade-up"
			data-aos-anchor-placement="top-center"
			className="project-item-wrap">
			<div className="project-item">
				<div className="project-img">
					<img src={image} alt={title} />
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
