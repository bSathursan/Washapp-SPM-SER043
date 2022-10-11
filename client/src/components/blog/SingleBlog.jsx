import React, { useEffect, useState } from "react";
import { ImFacebook, ImTwitter } from "react-icons/im";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { useParams } from "react-router-dom";
import axios from "axios";
import { imageURL } from "../../config/paths";

const SingleBlog = () => {
	const { id } = useParams();
	const [Blog, setBlog] = useState({});

	useEffect(() => {
		const getBlog = async () => {
			const res = await axios.get(`/blog/get/${id}`);
			setBlog(res.data.singleBlog);
			// console.log(res.data.singleBlog);
		};
		getBlog();
	}, []);

	return (
		<div className="mb-24">
			<img
				src={imageURL + Blog.name}
				alt="blog_1_cover_photo "
				className=" h-96 w-full object-cover"
			/>
			<span className="pt-5 flex justify-center font-bold text-3xl">
				{Blog.topic}
			</span>
			<div className="grid grid-cols-2   gap-0">
				<div className=" pl-5 mt-10 text-center text-justify" style={{marginLeft:"500px"}} >
					<label className="text-lg">{Blog.content}</label>
				</div>
			</div>
		</div>
	);
};

export default SingleBlog;
