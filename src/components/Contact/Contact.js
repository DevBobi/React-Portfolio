import React, { useRef } from "react";
import { ReactComponent as Message } from "./Message.svg";
import { ReactComponent as Arrow } from "./Arrow.svg";
import emailjs from 'emailjs-com';
import swal from 'sweetalert';

const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();
		emailjs.sendForm('service_wkteyb4', 'template_kn2soop', form.current, 'user_b4OtGcHQRyas1bN3hRaBM')
			.then((result) => {
				if (result?.status === 200) {
					swal("Thanks for your concern!", "Email sent successfully!", "success");
				}
				e.target.reset()
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
			<div className="form-wrapper"

			>
				<form className="contact-form" ref={form} onSubmit={sendEmail}>
					<input
						type="text"
						name="name"
						placeholder="Your name"
						className="form-control"
						required
					/>
					<input
						type="email"
						name="email"
						placeholder="Your email"
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
					<textarea
						type="submit"
						name="message"
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
