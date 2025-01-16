import React from "react";
import { Link, useLocation } from "react-router";
import "../styles/breadcrumbs.css";

const Breadcrumbs = () => {
	const loaction = useLocation();

	let currentLink = "";

	const crumbs = loaction.pathname
		.split("/")
		.filter((crumb) => crumb != "")
		.map((crumb) => crumb.charAt(0).toUpperCase() + crumb.slice(1))
		.map((crumb) => {
			currentLink += "/" + crumb;
			return (
				<Link to={currentLink} className="crumb">
					{crumb}
				</Link>
			);
		});

	return <div className="breadcrumbs">{crumbs}</div>;
};

export default Breadcrumbs;
