import React from "react";
import { Outlet } from "react-router";

const CareersLayout = () => {
	return (
		<div
			className="careers-layout"
			style={{
				padding: "20px",
				maxWidth: "1000px",
				margin: "0 auto",
			}}
		>
			<Outlet />
		</div>
	);
};

export default CareersLayout;
