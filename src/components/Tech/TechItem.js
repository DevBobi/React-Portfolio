import React from "react";

const TechItem = ({ icon, text }) => {
	return (
		<div className="tech-item">
			<span className="tech-icon">{icon}</span>
			<h3 className="tech-icon-text">{text}</h3>
		</div>
	);
};

export default TechItem;
