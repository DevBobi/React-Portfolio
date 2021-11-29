import React, { useState } from "react";
import axios from "axios";
import { ReactComponent as Message } from "./Message.svg";
import { ReactComponent as Arrow } from "./Arrow.svg";

const Contact = ({ setSent }) => {
	const [data, setData] = useState({
		username: "",
		subject: "",
		email: "",
		message: "",
	});

	const handleChange = (e) => {
		setData({ ...data, [e.target.name]: e.target.value });
	};

	const handleSend = (e) => {
		e.preventDefault();

		axios
			.post("http://127.0.0.1:8000/api/contact/", data)
			.then((res) => {
				if (res.status === 200) {
					setSent(true);
					setData({ username: "", subject: "", email: "", message: "" });
				} else {
					setSent(false);
				}
			})
			.catch((err) => console.log(err));
	};

	return (
		<section id="contact">
			<h2 className="contact-header">Write me</h2>
			<span>
				<Message />
			</span>
			<div className="form-wrapper">
				<form className="contact-form" onSubmit={handleSend}>
					<input
						type="text"
						name="username"
						value={data.username}
						placeholder="Your name"
						className="form-control"
						required
						onChange={handleChange}
					/>
					<input
						type="text"
						name="subject"
						value={data.subject}
						placeholder="Subject"
						className="form-control"
						required
						onChange={handleChange}
					/>
					<input
						type="email"
						name="email"
						value={data.email}
						placeholder="Your email"
						className="form-control"
						required
						onChange={handleChange}
					/>
					<textarea
						name="message"
						id="message"
						value={data.message}
						className="form-control"
						cols="30"
						rows="6"
						placeholder="Your message"
						required
						onChange={handleChange}
					></textarea>
					<button className="btn-send">
						Send message <Arrow />
					</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
