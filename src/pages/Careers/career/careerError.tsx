import React from "react";
import { Link, useRouteError } from "react-router";

const CareerError = () => {
	const error = useRouteError();
	console.log(error, "error");

	return (
		<div>
			<h2>Error</h2>
			<p>Error finding the page</p>
			<Link to="/">Go back to home</Link>
		</div>
	);
};

export default CareerError;
