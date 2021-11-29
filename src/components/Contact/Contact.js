import React, { useRef, useState } from "react";
import axios from "axios";
import { ReactComponent as Message } from "./Message.svg";
import { ReactComponent as Arrow } from "./Arrow.svg";
import emailjs from 'emailjs-com';
import swal from 'sweetalert';

const Contact = ({ setSent }) => {
	const form = useRef();

	const sendEmail = (e) => {
		swal("Good job!", "Email send successfully!", "success");
		e.preventDefault();
		emailjs.sendForm('service_wkteyb4', 'template_kn2soop', form.current, 'user_b4OtGcHQRyas1bN3hRaBM')
			.then((result) => {
				console.log(result.text);
			}, (error) => {
				console.log(error.text);
			});
	};
	return (
		<section id="contact">
			<h2 className="contact-header">Write me</h2>
			<span>
				<Message />
			</span>
			<div className="form-wrapper">
				<form className="contact-form" ref={form} onSubmit={sendEmail}>
					<input
						type="text"
						name="user_name"
						placeholder="Your name"
						className="form-control"
						required
					/>
					<input
						type="text"
						name="subject"
						placeholder="Subject"
						className="form-control"
						required
					/>
					<input
						type="email"
						name="user_email"
						placeholder="Your email"
						className="form-control"
						required
					/>
					<textarea
						type="submit"
						id="message"
						className="form-control"
						cols="30"
						rows="6"
						placeholder="Your message"
						required

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
