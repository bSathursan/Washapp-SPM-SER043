import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { allowedTypes } from "../../helpers/allowedUploads";
import Error from "../toasts/Error";
import Success from "../toasts/Success";

const CreateBlog = () => {
	const [Blog, setBlog] = useState("");
	const [Err, setErr] = useState("");
	const [ErrMsg, setErrMsg] = useState("");
	const [Succ, setSucc] = useState("");
	const [File, setFile] = useState(null);

	const AddBlog = async (e) => {
		e.preventDefault();
		const date = new Date();
		Blog.date = date.toLocaleDateString();
		if (File) {
			var formData = new FormData();
			const fileName = `${Date.now()}-${File.name}`;
			formData.append("name", fileName);
			formData.append("image", File);
			formData.append("topic", Blog.topic);
			formData.append("description", Blog.description);
			formData.append("content", Blog.content);
			formData.append("date", Blog.date);
			// console.log(formData.getAll('topic'));
			try {
				const res = await axios.post("/blog/post", formData);

				if (res.status === 200) {
					setSucc(true);
				}
			} catch (err) {
				setErrMsg("Oops! Somthing went wrong");
				setErr(true);
				console.log(err);
			}
		}
	};

	const fileHandler = (e) => {
		const selectedFile = e.target.files[0];
		if (selectedFile && allowedTypes.includes(selectedFile.type)) {
			setFile(selectedFile);
			setErr(false);
		} else {
			setFile(null);
			setErrMsg(
				"Select valid type. (only jpeg, jpg, png file types are allowed)"
			);
			setErr(true);
		}
	};
	return (
		<div className="pt-10">
			{Err && <Error error={ErrMsg} />}
			{Succ && <Success success={"Successfully Added"} />}
			<span className="font-bold  text-5xl flex justify-center" style={{color:"#015958"}}>
				Create Blog
			</span>
			<div className=" px-44">
				<form
					className=" pt-10"
					onSubmit={AddBlog}
					encType="multipart/form-data"
				>
					<div className="mb-10">
						<label for="image" className="block text-gray-400 text-xl mb-2">
							Upload Cover Photo
						</label>
						<input
							type="file"
							accept=".png, .jpg, .jpeg"
							required
							onChange={fileHandler}
							name="image"
							id="image"
							className=" font-semibold text-light-blue py-2 px-4"
						/>
					</div>
					<div className="mb-10">
						<label className="block text-gray-400 text-xl mb-2" for="username">
							Title
						</label>
						<input
							required
							onChange={(e) => setBlog({ ...Blog, topic: e.target.value })}
							className="shadow focus:border-light-blue appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
							type="text"
						/>
					</div>
					<div className="mb-10">
						<label className="block text-gray-400 text-xl mb-2" for="username">
							Brief Introduction
						</label>
						<textarea
							onChange={(e) =>
								setBlog({ ...Blog, description: e.target.value })
							}
							required
							className="focus:border-light-blue shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
							type="text"
						/>
					</div>
					<div className="mb-10">
						<label className="block text-gray-400 text-xl mb-2" for="username">
							Content
						</label>
						<textarea
							onChange={(e) => setBlog({ ...Blog, content: e.target.value })}
							required
							className="focus:border-light-blue shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							type="text"
						/>
					</div>
					<div className=" flex justify-end mb-10">
						<Link to="/auth/user/blogs">
							<button className=" rounded-full  font-medium shadow-md text-white py-2 px-5 text-xl" style={{background:"#023535"}}>
								Cancel
							</button>
						</Link>
						<button
							className=" ml-5 rounded-full font-medium shadow-md text-white py-2 px-5 text-xl"
							type="submit"
							style={{background:"#023535"}}
						>
							Publish
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default CreateBlog;
