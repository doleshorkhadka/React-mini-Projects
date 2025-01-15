import axios from "axios";
import React from "react";
import { useLoaderData, useParams } from "react-router";

export function Career() {
	const careerData = useLoaderData();
	console.log(careerData, "careerData");

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
	try {
		const response = await instance.get(`/careers`, { params: { id: id } });

		if (response.status != 200) {
			throw Error(`Error fetching career data with id: ${id}`);
		}

		return response.data[0];
	} catch (error) {
		console.log(error);
		throw Error(`Network Problems`);
	}
};

export default careerLoader;
