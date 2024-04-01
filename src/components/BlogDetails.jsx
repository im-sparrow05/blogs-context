import React from "react";
import { NavLink } from "react-router-dom";

const BlogDetails = ({post}) => {
  return (
    <div className="flex flex-col w-5/6 md:w-1/2 gap-1">
      <NavLink to={`/blog/${post.id}`}>
        <span className="font-bold text-lg">{post.title}</span>
      </NavLink>
      <p className="text-sm">
        By
        <span className="italic ">{post.author}</span>{" "}
        On{" "}
        <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}>
          <span className="font-bold underline">{post.category}</span>
        </NavLink>
      </p>
      <p className="text-sm">Posted on {post.date}</p>
      <p className="pt-3 pb-2 tracking-normal">{post.content}</p>
      <div className="text-xs underline flex flex-row flex-wrap gap-2 font-bold text-blue-600">
        {post.tags.map((tag, index) => (
          <NavLink key={index} to={`/tags/${tag.replaceAll(" ", "-")}`}>
            <span >{`#${tag}`}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default BlogDetails;
