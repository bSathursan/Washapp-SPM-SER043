import { useState, useEffect } from "react";
import PickUPList from "../components/Deliverer/PickUpList";
import DeliveryList from "../components/Deliverer/DeliveryList";
import Report from "../components/Deliverer/ReportForm";
import sara from "../assets/images/saran.jpg"

import axios from "axios";
import MNavbar from "../components/nav/Mnavbar";

const Deliverer = () => {
	const [isPickUp, setPickUp] = useState(true);

	const [deliverer, Setdeliverer] = useState({});

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
			<div className="flex flex-wrap mt-20 ">
				<div className="flex items-center ml-40 mr-96">
					<div className="flex-shrink-0">
						<img
							className="rounded-full"
							src={sara}
							alt=""
							style={{height:"150px"}}
						/>
					</div>

					<div className="ml-4">
						<div className="text-sm font-medium text-gray-900" style={{color:"#008F8C", fontSize:"30px"}}>
							{deliverer.name}
						</div>
						<div className="text-sm text-gray-500 mt-2" style={{color:"#0FC2C0", fontSize:"18px"}}>{deliverer.email}</div>
					</div>
				</div>
				<div
					className="max-w-2xl float-right   p-7 "
					style={{ marginLeft: "1100px", marginTop:"-180px" }}
				>
					<Report />
				</div>
			</div>

			<div
				className="flex items-center"
				style={{ marginTop: "50px", marginLeft: "150px" }}
			>
				<button
					onClick={() => setPickUp(true)}
					style={{ marginRight: "20px", width: "120px", background:"#023535" }}
					className="bg-light-blue hover:bg-blue-300 text-white font-bold py-2 px-4 rounded-full"
				>
					Pick Up
				</button>
				<button
					onClick={() => setPickUp(false)}
					style={{ width: "120px", background:"#023535" }}
					className="bg-light-blue hover:bg-blue-300 text-white font-bold py-2 px-4 rounded-full"
				>
					Deliver
				</button>
			</div>
			{isPickUp ? <PickUPList /> : <DeliveryList />}
		</div>
	);
};

export default Deliverer;
