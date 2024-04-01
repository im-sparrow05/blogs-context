import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Header from "../components/Header";
import BlogDetails from "../components/BlogDetails";

const BlogPage = () => {
  const [blog, setBlog] = useState(null);
  const [relatedblog, setRelatedblog] = useState([]);
  const location = useLocation();
  const navigation = useNavigate();
  const { loading, setLoading } = useContext(AppContext);
  const blogId = location.pathname.split("/").at(-1);
  const newBaseUrl = "https://codehelp-apis.vercel.app/api/";

  async function fetchRelatedBlogs() {
    setLoading(true);
    let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      setBlog(data.blog);
      setRelatedblog(data.relatedBlogs);
    } catch (err) {
      console.log(err);
      setBlog(null);
      setRelatedblog([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    if (blogId) {
      fetchRelatedBlogs();
    }
  }, [location.pathname]);

  return (
    <div>
      <Header />
      <div >
        
      </div>
      <div className="mb-16 py-8 mt-16 min-h-[80vh] w-full flex justify-center items-center">
        {loading ? (
          <p className="text-center font-bold text-3xl">Loading...</p>
        ) : blog ? (
          <div className="flex flex-col justify-center items-center">
            <button className="border-2 border-gray-300 py-1 px-4 rounded-md mb-6" onClick={() => navigation(-1)}>Back</button>
            <BlogDetails post={blog} />
            
            <h2 className="mb-8 mt-12 mx-auto text-3xl font-bold">Releated Blogs</h2>
            
            {relatedblog.map((post) => (
              <div className="flex flex-col justify-center items-center gap-y-10 my-4" key={post.id}>
                <BlogDetails post={post} />
              </div>
            ))}
          </div>
        ) : (
          <p>No Blog Found</p>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
