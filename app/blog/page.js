"use client";

import { blogs } from "../../data/blogs";

export default function BlogListPage() {
  return (
    <div className="container">
      <h1>All Blogs</h1>
      {blogs.map((blog, index) => (
        <div key={index} className="blogCard" style={{ marginBottom: "30px" }}>
          <h2>{blog.title}</h2>
          {blog.image && (
            <img
              src={blog.image}
              alt={blog.title}
              style={{ maxWidth: "100%", height: "auto", margin: "10px 0" }}
            />
          )}
          <p>{blog.desc}</p>
        </div>
      ))}
    </div>
  );
}
