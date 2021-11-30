import React, { useEffect, useState } from "react";
import ProjectItem from "./ProjectItem";
import Projectdata from "./ProjectData";

const Project = () => {
	const [data, setData] = useState(Projectdata);

	const filterdProject = (category) => {
		const filterdCategory = Projectdata.filter(currentItem => {
			return (currentItem.category === category)
		})
		setData(filterdCategory)

	}

	return (
		<section id="project">
			<div className="project-wrap">
				<h2 className="project-header">Projects</h2>
				<div className="project-group">
					{data?.map((item, index) => (
						<ProjectItem
							key={index}
							title={item.title}
							image={item.image}
							visitURL={item.demo}
							gitURL={item.github}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Project;
