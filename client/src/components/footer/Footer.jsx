import React from "react";
import { Link } from "react-router-dom";
import { TiLocation } from "react-icons/ti";
import { SiFacebook, SiInstagram, SiYoutube, SiTwitter } from "react-icons/si";
import { IoMail } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";

import LogoWhite from "../../assets/images/logo-blue.png";

const Footer = () => {
	return (
		<footer className="text-white pt-10" style={{background:"#008F8C"}}>
			<div className="flex mx-auto max-w-screen-2xl justify-between items-center px-10 min-h-12">
				<div>
					<img src={LogoWhite} alt="footer-logo" style={{marginTop:"-20px"}} />
					<div>
						<p className="max-w-md pt-5" style={{color:"#fafafa", marginTop:"-20px", fontSize:"20px"}}>
							We are professionals in the laundry and dry cleaning business,
							which means we always stay up to date on the latest technologies
							and cleaning methods.
						</p>
					</div>
					<div className="flex text-xl justify-between w-40 py-5">
						<SiFacebook />
						<SiYoutube />
						<SiInstagram />
						<SiTwitter />
					</div>
					<p className="pb-5">WASHAPP 2022 - All rights reserved &copy;</p>
				</div>
				<div>
					<div className="flex justify-end items-start pt-5">
						<div className="text-2xl pr-5 pt-1">
							<TiLocation />
						</div>
						<p>
							Jaffna main street, Jaffna Town <br /> Jaffna.
						</p>
					</div>
					<div className="flex justify-end items-center pt-5" style={{marginRight:"85px"}}>
						<div className="text-2xl pr-5">
							<IoMail />
						</div>
						<p>info@washapp.com</p>
					</div>
					<div className="flex justify-end items-center pt-5" style={{marginRight:"85px"}}>
						<div className="text-2xl pr-5">
							<IoIosCall />
						</div>
						<p>+94 77 544 897 25</p>
					</div>
					<div className="flex w-80 justify-between pt-5 pb-5" style={{marginTop:"100px", fontSize:"18px"}}>
						<Link to="#">Home</Link>
						<Link to="#">Services</Link>
						<Link to="#">About</Link>
						<Link to="#">Contact</Link>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
