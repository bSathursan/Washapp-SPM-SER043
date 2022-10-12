import { useState, useEffect } from "react";
import OrderList from "../components/Deliverer/OrderList";
import OrderList2 from "../components/Deliverer/OrderLIst2";
import axios from "axios";
import { Link } from "react-router-dom";
import sara from "../assets/images/saran.jpg"
import MNavbar from "../components/nav/Mnavbar";

const Deliverer_home = () => {
	const [deliverer, Setdeliverer] = useState({});
	const [isPickUp, setPickUp] = useState(true);
	const getDelivererDetails = async () => {
		try {
			const res = await axios.get("order/deleiverer/details");
			Setdeliverer(res.data.deliverer);
			// console.log(res.data.deliverer);
		} catch (err) {
			console.error(err.message);
		}
	};
	useEffect(() => {
		getDelivererDetails();
	}, []);
	return (
		<div>
			<MNavbar />
			<div
				className="flex items-center  "
				style={{
					marginTop: "50px",
					marginLeft: "150px",
				}}
			>
				<div className="flex-shrink-0 ">
					<img
						className="rounded-full"
						src={sara}
						alt=""
						style={{height:"150px"}}
					/>
				</div>
				<div className="ml-4 ">
					<div className="text-sm font-medium" style={{color:"#008F8C", fontSize:"30px"}}>
						{deliverer.name}
					</div>
					<div className="text-sm mt-2" style={{color:"#0FC2C0", fontSize:"18px"}}>{deliverer.email}</div>
				</div>
				<div className=" max-w-6xl " style={{ marginLeft: "1250px" }}>
					<button className="hover:bg-blue-200  text-white font-bold py-2 px-8 rounded-full " style={{background:"#023535", marginLeft:"-300px", height:"40px"}}>
						<Link to={`/auth/deliverer/Deliverer`}> My Deliveries</Link>
					</button>
				</div>
			</div>
			<div
				className="flex items-center"
				style={{ marginTop: "100px", marginLeft: "150px" }}
			>
				<button
					style={{ marginRight: "20px", width: "120px", background:"#023535" }}
					className="bg-light-blue hover:bg-blue-300 text-white font-bold py-2 px-4 rounded-full"
					onClick={() => setPickUp(true)}
				>
					Pick Up
				</button>
				<button
					style={{ width: "120px", background:"#023535" }}
					className="bg-light-blue hover:bg-blue-300 text-white font-bold py-2 px-4 rounded-full"
					onClick={() => setPickUp(false)}
				>
					Deliver
				</button>
			</div>
			{isPickUp ? <OrderList /> : <OrderList2 />}
		</div>
	);
};

export default Deliverer_home;
