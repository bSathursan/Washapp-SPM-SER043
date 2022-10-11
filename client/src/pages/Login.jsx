import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

import Error from "../components/toasts/Error";
import TShirtImage from "../../src/assets/images/hanging-t-shirt.png";
import { AuthContext } from "../contexts/AuthContext";

const Login = () => {
	document.title = "WASHAPP - Sign In";
	const history = useHistory();
	const { getLoggedIn } = useContext(AuthContext);
	const [error, setError] = useState("");
	const [buttonStatus, setButtonStatus] = useState(false);
	const [customer, setCustomer] = useState({ email: "", password: "" });

	const loginCustomer = async (e) => {
		e.preventDefault();
		setButtonStatus(true);

		try {
			await axios.post("customers/login", customer);
			setCustomer({});
			setButtonStatus(false);
			await getLoggedIn();
			history.push("/auth/user/packages");
		} catch (err) {
			setError(err.response.data.message);
			setButtonStatus(false);
		}
	};

	return (
		<div>
			{error && <Error error={error} />}
			<div className="text-gray-800 max-w-screen-2.5xl ml-auto max-h-88 pl-4 flex justify-between items-center overflow-hidden relative" style={{marginTop:"100px"}}>
				<div className="font-semibold text-lg">
					<h1
						data-aos="fade-up"
						className="text-5xl font-extrabold pb-10 text-center"
						style={{color:"#015958", marginTop:"20px"}}
					>
						Do what you love,We got your laundry...
					</h1>
					<form onSubmit={loginCustomer}>
						<div
							className="flex flex-col justify-start pb-5"
							data-aos="fade-up-left"
						>
							<label htmlFor="email" className="pb-1 text-gray-400">
								Email Address
							</label>
							<input
								type="email"
								name="email"
								id="email"
								autoComplete="off"
								className="outline-none rounded-full border px-4 py-3 focus:border-light-blue focus:border-2 transition duration-500 ease-in-out"
								required
								value={customer.email}
								onChange={(e) =>
									setCustomer({ ...customer, email: e.target.value })
								}
							/>
						</div>
						<div
							className="flex flex-col justify-start pb-5"
							data-aos-delay="50"
							data-aos="fade-up-left"
						>
							<label htmlFor="password" className="pb-1 text-gray-400">
								Password
							</label>
							<input
								type="password"
								name="password"
								id="password"
								autoComplete="off"
								className="outline-none rounded-full border px-4 py-3 focus:border-light-blue transition duration-500 ease-in-out"
								required
								value={customer.password}
								onChange={(e) =>
									setCustomer({ ...customer, password: e.target.value })
								}
							/>
						</div>
						<p data-aos-delay="100" data-aos="fade-up-left text-gray-500">
							Don't have an Account ? &nbsp;
							<Link to="/auth/register" style={{color:"#0CABA8"}}>
								Sign Up
							</Link>
						</p>
						<button
							className="bg-light-blue text-white py-2 px-14 rounded-full mt-8 font-semibold"
							data-aos-delay="150"
							data-aos="fade-up-left"
							type="submit"
							style={{background:"#023535", height:"40px"}}
						>
							{!buttonStatus ? "Sign In" : "Signing In"}
						</button>
					</form>
				</div>
				<div className="max-h-88">
					<img src={TShirtImage} alt="t-shirt" data-aos="fade-left" style={{marginRight:"50px", marginTop:"50px"}} />
				</div>
			</div>
		</div>
	);
};

export default Login;
