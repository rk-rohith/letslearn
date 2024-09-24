import React from 'react';
import { useParams } from 'react-router-dom';
import SpringBootBlog from './SpringBootBlog';

const SpringBoot = () => {
  const { subtopic } = useParams();

  const renderSpringBootContent = () => {
    switch (subtopic) {
      case 'springboot-overview':
        return <SpringBootBlog />;
      default:
        return <div>Spring Boot content not found.</div>;
    }
  };

  return (
    <div>
      <h1>{subtopic.replace('-', ' ').toUpperCase()}</h1>
      {renderSpringBootContent()}
    </div>
  );
};

export default SpringBoot;