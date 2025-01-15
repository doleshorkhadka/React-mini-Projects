import axios from "axios";
import React from "react";
import { Link, useLoaderData } from "react-router";

export function Careers() {
	const careersData = useLoaderData();

	return (
		<div>
			<h1>Careers</h1>
			{careersData.map((career) => (
				<div key={career.id}>
					<Link to={`${career.id}`}>
						<h2>{career.title}</h2>
					</Link>
					<p>{career.description}</p>
				</div>
			))}
		</div>
	);
}

const careersDataLoaders = async () => {
	const baseUrl = "http://localhost:3000";
	const instance = axios.create({
		baseURL: baseUrl,
	});
	const careersData = instance
		.get("/careers")
		.then((response) => response.data);

	return careersData;
};

export default careersDataLoaders;
