import React from "react";
import { Form, redirect, useActionData } from "react-router";

export function ContactUs() {
	const data = useActionData();
	return (
		<div>
			<Form
				style={{
					width: "50%",
					display: "flex",
					flexDirection: "column",
					alignItems: "stretch",
					justifyContent: "center",
				}}
				action="/contact"
				method="post"
			>
				<h1>Contact Us</h1>
				{data && <p style={{ color: "red" }}>{data.message}</p>}
				<label>Name</label>
				<input type="text" name="name" />
				<label>Email</label>
				<input type="email" name="email" />
				<label>Message</label>
				<textarea name="message" rows={10}></textarea>
				<button type="submit">Submit</button>
			</Form>
		</div>
	);
}

const contactUsAction = async ({ request }) => {
	const data = await request.formData();

	const formData = {
		name: data.get("name"),
		email: data.get("email"),
		message: data.get("message"),
	};

	if (formData.name == "" || formData.email == "" || formData.message == "") {
		return { message: "Please fill in all fields" };
	}

	console.log("Form Data: ", formData);

	return redirect("/");
};

export default contactUsAction;
