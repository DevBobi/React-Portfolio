import React from "react";
import { BsCode } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";

const ProjectItem = ({ image, title, gitURL, visitURL }) => {
	return (
		<div
			data-aos="zoom-in-up"
			className="project-item-wrap">
			<div className="project-item">
				<div className="project-img">
					<img src={image} alt={title} />
				</div>
				<h5 className="text-light fw-light ps-3 pt-3">{title}</h5>
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
