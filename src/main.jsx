import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router";
import AppLayouts from "./Layouts/AppLayouts.jsx";
import About from "./pages/about.tsx";
import Help from "./pages/help.tsx";
import ContactUs from "./pages/contact-us.tsx";
import Error404 from "./pages/404-error.tsx";
import careersDataLoaders, { Careers } from "./pages/Careers/careers.tsx";
import CareersLayout from "./Layouts/CareersLayout.tsx";
import careerLoader, { Career } from "./pages/Careers/career/career.tsx";
import CareerError from "./pages/Careers/career/careerError.tsx";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<AppLayouts />}>
			<Route index element={<App />} />
			<Route path="about" element={<About />} />
			<Route path="help" element={<Help />} />

			<Route path="careers" element={<CareersLayout />}>
				<Route index loader={careersDataLoaders} element={<Careers />} />
				<Route
					path=":id"
					loader={careerLoader}
					element={<Career />}
					errorElement={<CareerError />}
				/>
			</Route>
			<Route path="contact" element={<ContactUs />} />
			<Route path="*" element={<Error404 />} />
		</Route>
	)
);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
