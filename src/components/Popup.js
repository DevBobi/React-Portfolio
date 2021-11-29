import React from "react";
import { motion } from "framer-motion";
import { GrClose } from "react-icons/gr";

const Popup = ({ closePopup }) => {
	return (
		<motion.div
			initial={{ x: "150%" }}
			animate={{ x: "0%" }}
			exit={{ x: "150%" }}
			className="popup"
		>
			Your message has been sent!
			<span onClick={closePopup}>
				<GrClose />
			</span>
		</motion.div>
	);
};

export default Popup;
