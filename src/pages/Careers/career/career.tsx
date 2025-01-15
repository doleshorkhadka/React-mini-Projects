import axios from "axios";
import React from "react";
import { useLoaderData, useParams } from "react-router";

export function Career() {
	const careerData = useLoaderData()[0];

	return (
		<div>
			<h1>Career</h1>
			<h2>{careerData.title}</h2>
			<p>{careerData.description}</p>
			<p>{careerData.location}</p>
			<p>{careerData.category}</p>
			<p>{careerData.salaryRange}</p>
			<p>{careerData.skills}</p>
			<p>{careerData.postedDate}</p>
		</div>
	);
}
const careerLoader = async ({ params }) => {
	const { id } = params;

	const baseUrl = "http://localhost:3000";
	const instance = axios.create({
		baseURL: baseUrl,
	});
	const careerData = instance
		.get(`/careers`, { params: { id: id } })
		.then((response) => response.data);

	console.log("fetching", careerData);

	return careerData;
};

export default careerLoader;
