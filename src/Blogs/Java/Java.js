// src/Blogs/Java/index.js
import React from 'react';
import { useParams } from 'react-router-dom';
import JavaBasic from './Basic/BasicHomePage';
import OOPBlog from './Oops/OOPHomePage';
import CollectionsBlog from './Collections/CollectionsBlog';

const Java = () => {
  const { subtopic } = useParams();

  const renderJavaContent = () => {
    switch (subtopic) {
      case 'jdkjvmjre', 'classloader':
        return <JavaBasic />;
      case 'oop':
        return <OOPBlog />;
      case 'collections':
        return <CollectionsBlog />;
      default:
        return <div>Java content not found.</div>;
    }
  };

  return (
    <div>
      <h1>{subtopic?.replace('-', ' ').toUpperCase()}</h1>
      {renderJavaContent()}
    </div>
  );
};

export default Java;