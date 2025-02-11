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
import Error404 from "./pages/404-error.tsx";
import careersDataLoaders, { Careers } from "./pages/Careers/careers.tsx";
import CareersLayout from "./Layouts/CareersLayout.tsx";
import careerLoader, { Career } from "./pages/Careers/career/career.tsx";
import CareerError from "./pages/Careers/career/careerError.tsx";
import contactUsAction, { ContactUs } from "./pages/contact-us.tsx";
import UserProfileEditor from "./pages/UserProfile.tsx";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<AppLayouts />}>
			<Route index element={<App />} />
			<Route path="about" element={<About />} />
			<Route path="help" element={<Help />} />
			<Route path="user" element={<UserProfileEditor />} />
			<Route
				path="careers"
				element={<CareersLayout />}
				errorElement={<CareerError />}
			>
				<Route index loader={careersDataLoaders} element={<Careers />} />
				<Route path=":id" loader={careerLoader} element={<Career />} />
			</Route>
			<Route path="contact" element={<ContactUs />} action={contactUsAction} />
			<Route path="*" element={<Error404 />} />
		</Route>
	)
);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
