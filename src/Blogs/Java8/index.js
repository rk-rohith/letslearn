import React from 'react';
import { useParams } from 'react-router-dom';

const Java8 = () => {
  const { subtopic } = useParams();

  const renderJava8Content = () => {
    switch (subtopic) {
      case 'lambda-expressions':
        return <div>Lambda Expressions Content</div>;
      case 'functional-interface':
        return <div>Functional Interface Content</div>;
      case 'default-methods':
        return <div>Default Methods Content</div>;
      default:
        return <div>Java 8 content not found.</div>;
    }
  };

  return (
    <div>
      <h1>{subtopic.replace('-', ' ').toUpperCase()}</h1>
      {renderJava8Content()}
    </div>
  );
};

export default Java8;