import React, { useEffect, useState } from "react";
import ProjectItem from "./ProjectItem";
import axios from "axios";

const Project = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		const getProjectList = async () => {
			const res = await axios.get("http://127.0.0.1:8000/api/project-list/");
			if (res.status === 200) {
				setData(res.data);
			}
		};

		getProjectList();
	}, []);

	console.log(data);

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
							visitURL={item.visi_link}
							gitURL={item.git_link}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Project;
