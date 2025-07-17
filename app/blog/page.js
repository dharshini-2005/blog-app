"use client";

import { useState } from "react";
import Link from "next/link";
import { blogs } from "../../data/blogs";

export default function BlogListPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 3;

  const start = (currentPage - 1) * blogsPerPage;
  const currentBlogs = blogs.slice(start, start + blogsPerPage);
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  return (
    <div className="container">
      <h1>Blogs</h1>
      {currentBlogs.map((blog, index) => (
        <div key={index} className="blogCard">
          <h3>{blog.title}</h3>
          <p>{blog.desc.substring(0, 100)}...</p>
          <Link href={`/blog/${blog.slug}`}>Read More</Link>
        </div>
      ))}
      <div className="pagination">
        {[...Array(totalPages)].map((_, i) => (
          <button key={i} onClick={() => setCurrentPage(i + 1)}>
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
