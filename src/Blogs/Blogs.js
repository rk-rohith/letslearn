// blogs/Blogs.js
import React from "react";
import { useParams } from "react-router-dom";
import Java from "./Java/Java";
import Java8 from "./Java8";
import SpringBoot from "./Springboot";
import DSA from "./DSA/DSAHomePage";

const Blog = () => {
  const { topic } = useParams();
  const renderCategoryContent = () => {
    switch (topic) {
      case "java":
        return <Java />;
      case "java8":
        return <Java8 />;
      case "springboot":
        return <SpringBoot />;
      case "dsa":
        return <DSA />;
      default:
        return <div>Blog category not found.</div>;
    }
  };

  return (
    <div>
      <h1>{topic.replace("-", " ").toUpperCase()}</h1>
      {renderCategoryContent()}
    </div>
  );
};

export default Blog;
