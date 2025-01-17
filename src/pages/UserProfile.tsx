import React, { useState } from "react";

function UserProfileEditor() {
	// 1) Initialize state with a complex object
	const [userData, setUserData] = useState({
		name: "",
		email: "",
		socialProfiles: {
			twitter: "",
			linkedIn: "",
		},
		tags: [],
	});

	// 2) Handle top-level fields (e.g., name, email)
	const handleInputChange = (event) => {
		const { name, value } = event.target;

		// Always copy the previous state and update the relevant field
		setUserData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	// 3) Handle nested fields (e.g., within socialProfiles)
	const handleSocialProfileChange = (event) => {
		const { name, value } = event.target; // e.g., 'twitter' or 'linkedIn'

		setUserData((prevState) => ({
			...prevState,
			socialProfiles: {
				...prevState.socialProfiles,
				[name]: value,
			},
		}));
	};

	// 4) Handle array updates (e.g., adding/removing tags)
	const handleAddTag = () => {
		const newTag = prompt('Enter a new tag (e.g., "JavaScript"):');
		if (newTag) {
			setUserData((prevState) => ({
				...prevState,
				tags: [...prevState.tags, newTag],
			}));
		}
	};

	const handleRemoveTag = (index) => {
		setUserData((prevState) => ({
			...prevState,
			tags: prevState.tags.filter((_, i) => i !== index),
		}));
	};

	// 5) Example submission handler (could be an API call, etc.)
	const handleSubmit = (event) => {
		event.preventDefault();
		console.log("Submitting:", userData);
		// e.g., send userData to a backend server via fetch/axios
	};

	return (
		<form
			onSubmit={handleSubmit}
			style={{
				width: "50%",
				display: "flex",
				flexDirection: "column",
				alignItems: "stretch",
				justifyContent: "center",
			}}
		>
			<h2>User Profile Editor</h2>

			{/* Top-level fields */}
			<div>
				<label>
					Name:
					<input
						name="name"
						value={userData.name}
						onChange={handleInputChange}
					/>
				</label>
			</div>

			<div>
				<label>
					Email:
					<input
						name="email"
						value={userData.email}
						onChange={handleInputChange}
					/>
				</label>
			</div>

			{/* Nested fields in an object (socialProfiles) */}
			<h3>Social Profiles</h3>
			<div>
				<label>
					Twitter:
					<input
						name="twitter"
						value={userData.socialProfiles.twitter}
						onChange={handleSocialProfileChange}
					/>
				</label>
			</div>
			<div>
				<label>
					LinkedIn:
					<input
						name="linkedIn"
						value={userData.socialProfiles.linkedIn}
						onChange={handleSocialProfileChange}
					/>
				</label>
			</div>

			{/* Array handling (tags) */}
			<h3>Tags</h3>
			<ul>
				{userData.tags.map((tag, index) => (
					<li key={tag + index}>
						{tag}
						<button type="button" onClick={() => handleRemoveTag(index)}>
							Remove
						</button>
					</li>
				))}
			</ul>
			<button type="button" onClick={handleAddTag}>
				Add Tag
			</button>

			<br />
			<button type="submit">Save Profile</button>
		</form>
	);
}

export default UserProfileEditor;
