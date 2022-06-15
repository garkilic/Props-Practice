import { useState, useEffect } from "react";
import React from "react";
import BlogList from "./BlogList";

const Home = () => {
	const [blogs, setBlogs] = useState([
		{
			title: "I am getting better",
			body: "lorem ipsum...",
			author: "griffin",
			id: 1,
		},
		{
			title: "React is getting easier",
			body: "lorem ipsum...",
			author: "griffin",
			id: 2,
		},
		{
			title: "this is making sense",
			body: "lorem ipsum...",
			author: "jack",
			id: 3,
		},
	]);

	const handleDelete = (id) => {
		const newBlogs = blogs.filter((blog) => blog.id !== id);
		setBlogs(newBlogs);
	};

	useEffect(() => {
		console.log("useEffect Ran");
	});

	return (
		<div className="Home">
			<BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
		</div>
	);
};

export default Home;
