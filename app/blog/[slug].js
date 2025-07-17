import { blogs } from "../../../data/blogs";

export default function BlogDetail({ params }) {
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) return <h2>Blog Not Found</h2>;

  return (
    <div className="container">
      <h1>{blog.title}</h1>
      <p>{blog.desc}</p>
    </div>
  );
}
