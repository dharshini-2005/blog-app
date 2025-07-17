"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { blogs } from "../../data/blogs";

export default function AdminPage() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const router = useRouter();

  const handleAdd = () => {
    const slug = title.toLowerCase().replace(/ /g, "-");
    blogs.push({ title, desc, slug });
    alert("Blog added!");
    setTitle("");
    setDesc("");
  };

  return (
    <div className="container">
      <h1>Admin - Add Blog</h1>
      <input
        placeholder="Blog Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Blog Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      ></textarea>
      <button onClick={handleAdd}>Add Blog</button>
    </div>
  );
}
