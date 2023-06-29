import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../features/Posts/AppContext";
const PostPage = () => {
  const { postId } = useParams();
  const { loading, error, data } = useContext(AppContext);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  const post = data.data.find((blogPost) => blogPost.id === parseInt(postId)); // Find the blog post with matching id
  const paragraphs = post.attributes.blogContent.split("\n");
  if (!post) {
    return <p>Post not found</p>;
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [postId]);
  const localeDate = post.attributes.date;
  const realDate = new Date(localeDate).toLocaleString();

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <header className="bg-gray-200 pb-12 w-full max-w-[2000px]  ">
        <div className="flex w-full justify-center py-4">
          <img
            className="object-cover w-1/2 h-auto"
            src={`http://localhost:1337${post.attributes.coverImg.data[0].attributes.url}`}
            alt="Post Holdings Logo"
          />
        </div>
        <div className=" mx-10 px-4 ">
          <h1 className="text-center sm:text-left text-3xl ss:text-4xl xl:text-6xl font-bold text-gray-800 ">
            {post.attributes.blogTitle}
          </h1>
          <p className="text-gray-600 mt-2 text-center sm:text-left ss:text-2xl">
            Published on {realDate}
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-[2000px]">
        <article className=" max-w-none xs:p-10 xs:pt-0 sm:p-20 sm:pt-0">
          {paragraphs.map((paragraph, index) => (
            <div key={index}>
              <p className="xl:leading-[50px] text-justify lg:text-2xl xl:text-3xl font-[400] ">
                {paragraph}
              </p>
              <br />
            </div>
          ))}
        </article>
      </main>
    </div>
  );
};

export default PostPage;
