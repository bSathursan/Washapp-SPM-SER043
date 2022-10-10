import React from "react";

const InfoCard = ({ info, total }) => {
	return (
		<div className="w-1/2 shadow-lg rounded-xl p-8 bg-white m-8 flex justify-between" style={{background:"#fafafa"}}>
			<div>
				<h1 className="text-5xl font-semibold" style={{color:"#023535"}}>{info.total}</h1>
				<p className="text-lg font-medium pt-2" style={{color:"#0FC2C0"}}>{info.name}</p>
			</div>
			<div className="text-5xl p-1" style={{color:"#015958"}}>{info.icon}</div>
		</div>
	);
};

export default InfoCard;
