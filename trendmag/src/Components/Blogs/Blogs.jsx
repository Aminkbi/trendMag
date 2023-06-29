import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../features/Posts/AppContext";

const Blogs = () => {
  const { loading, data, error } = useContext(AppContext);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const blogpost = data?.data
    .sort((a, b) => new Date(b.attributes.date) - new Date(a.attributes.date))
    .slice(-6)
    .map((post, id) => (
      <div
        key={post.id}
        className="w-full bg-white rounded-xl overflow-hidden drop-shadow-md relative justify-between"
      >
        <Link to={`/posts/${post.id}`}>
          <div className="flex flex-col justify-between items-center h-full">
            <div className="relative h-auto w-full">
              <img
                className="object-cover w-full h-full"
                src={`http://localhost:1337${post.attributes.coverImg.data[0].attributes.url}`}
                alt="Post Holdings Logo"
              />
              <span className="absolute top-2 left-2 bg-black text-white rounded-xl xl:text-xl p-2">
                {post.attributes.categories.data[0].attributes.categoryName}
              </span>
            </div>

            <div className="p-8 mt-auto">
              <h3 className="text-center sm:text-left font-semibold text-xl md:text-2xl xl:text-3xl">
                {post.attributes.blogTitle}
              </h3>
              <p className="text-gray-600 text-sm sm:text-lg xl:text-2xl mt-4">
                {post.attributes.blogDesc}...
              </p>
            </div>
          </div>
        </Link>
      </div>
    ));

  return (
    <div className="w-full bg-[#f9f9f9] py-[50px]">
      <div className="max-w-[2000px] mx-auto">
        <div className="grid grid-cols-1 xl:grid xl:grid-cols-4 md:grid md:grid-cols-3 sm:grid ss:grid-cols-2 sm:grid-cols-2 gap-14 px-4 xl:p-8 text-black">
          {blogpost}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
