import React from "react";
import { NavLink, Outlet } from "react-router";
import "./AppLayouts.css";

const AppLayouts = () => {
	const navLinks = [
		{
			name: "Home",
			path: "/",
		},
		{
			name: "About",
			path: "/about",
		},
		{
			name: "Help",
			path: "/help",
		},
		{
			name: "Careers",
			path: "/careers",
		},
		{
			name: "Contact",
			path: "/contact",
		},
	];
	return (
		<div className="app-layouts">
			<header>
				<nav aria-label="Main navigation">
					<h1>App Layouts</h1>
					<div className="nav-links">
						{navLinks.map((navLink) => (
							<NavLink
								key={navLink.name}
								to={navLink.path}
								className={({ isActive }) => (isActive ? "active" : "")}
							>
								{navLink.name}
							</NavLink>
						))}
					</div>
				</nav>
			</header>
			<main>
				<Outlet />
			</main>
		</div>
	);
};

export default AppLayouts;
