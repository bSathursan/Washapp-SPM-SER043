import React from "react";

import ReasonCheck from "../../assets/images/reason-check.png";
import ReasonsImage from "../../assets/images/reasons-img.png";
import LeftTopBubble from "../../assets/images/left-top-bubble-reason.png";
import LeftBottomBubble from "../../assets/images/left-bottom-bubble-reason.png";
import RightBottomBubble from "../../assets/images/right-bottom-bubble-reason.png";

const Reasons = () => {
	return (
		<div className="relative">
			<div className="max-w-screen-2xl mx-auto min-h-screen px-4 flex flex-col justify-center items-center">
				<div>
					<h1
						data-aos="fade-up"
						className="text-6xl font-extrabold pb-5 text-center"
						style={{color:"#015958"}}
					>
						Why to Choose Us
					</h1>
					<p
						className="text-xl font-semibold pb-4 text-gray-400 text-center max-w-3xl"
						data-aos="fade-up"
						data-aos-delay="200"
					>
						There are lots of apps out there, but not many that will do your laundry for you. 
						That’s where washapp comes in. Now this is what we call the age of convenience.
					</p>
				</div>
				<div className="flex items-center mt-20 justify-around">
					<div className="w-1/2">
						<img
							src={ReasonsImage}
							alt="reasons-img"
							data-aos="fade-right"
							data-aos-offset="50"
							style={{height:"400px", width:"700px"}}
						/>
					</div>
					<div
						className="mx-5 text-2xl font-semibold pb-4 text-center"
						data-aos="fade-left"
						style={{marginLeft:"120px"}}
					>
						<div className="flex items-center py-5">
							<img src={ReasonCheck} alt="check-img" />
							<h3 className="px-5 text-gray-400">Your clothes are in good hands</h3>
						</div>
						<div className="flex items-center py-5">
							<img src={ReasonCheck} alt="check-img" />
							<h3 className="px-5 text-gray-400">Free pickup and delivery</h3>
						</div>
						<div className="flex items-center py-5">
							<img src={ReasonCheck} alt="check-img" />
							<h3 className="px-5 text-gray-400">We're with you every step of the way.</h3>
						</div>
						<div className="flex items-center py-5">
							<img src={ReasonCheck} alt="check-img" />
							<h3 className="px-5 text-gray-400">Commercial Services</h3>
						</div>
					</div>
					<img
						src={LeftTopBubble}
						alt="left-top-bubble"
						className="absolute -z-2 -top-40 left-0"
						data-aos="fade-right"
					/>
					<img
						src={LeftBottomBubble}
						alt="left-bottom-bubble"
						className="absolute -z-2 -bottom-40 left-40"
						data-aos="fade-right"
					/>
					<img
						src={RightBottomBubble}
						alt="right-bottom-bubble"
						className="absolute -z-2 -bottom-80 right-20"
						data-aos="fade-left"
					/>
				</div>
			</div>
		</div>
	);
};

export default Reasons;
