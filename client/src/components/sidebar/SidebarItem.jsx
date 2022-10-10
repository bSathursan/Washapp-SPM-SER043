import React, { useContext, useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";


const SidebarItem = ({ sidebarLink, activeLink }) => {
	const active = activeLink ? "bg-green-300" : "";

	const history = useHistory();
	const { getLoggedIn } = useContext(AuthContext);

	const logout = async () => {
		await axios.get("/users/logout");
		await getLoggedIn();
		history.push("/");
	};

	return (
		<>
			<li
				className={`hover:text-gray-900 text-gray-800 focus:text-gray-900 mt-2 ${active}`}
			>
				{sidebarLink.path ? (
					<Link
						to={sidebarLink.path}
						className="flex flex-row items-center h-16 py-2 font-semibold p-5 hover:translate-x-2 transform transition-transform ease-in duration-200"
					>
						<span className="inline-flex items-center justify-center h-12 w-12 text-2xl pl-5" style={{ color: "#fafafa", fontSize: "20px" }}>
							{sidebarLink.icon}
						</span>
						<span className="mx-5 font-semibold text-base" style={{ color: "#fafafa", fontSize: "20px" }}>
							{sidebarLink.name}
						</span>
					</Link>
				) : (
					<Link
						onClick={logout}
						className="flex flex-row items-center h-16 py-2 font-semibold p-5 hover:translate-x-2 transform transition-transform ease-in duration-200"
					>
						<span className="inline-flex items-center justify-center h-12 w-12 text-2xl pl-5" style={{ color: "#fafafa", fontSize: "20px" }}>
							{sidebarLink.icon}
						</span>
						<span className="mx-5 font-semibold text-base" style={{ color: "#fafafa", fontSize: "20px" }}>
							{sidebarLink.name}
						</span>
					</Link>
				)}
			</li>
		</>
	);
};

export default SidebarItem;
