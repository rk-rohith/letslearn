import React from 'react';
import { useParams } from 'react-router-dom';
import AlgorithmsHomeBlog from './Algorithms/AlgorithmsHomeBlog';
import PatternsHomeBlog from './Patterns/PatternsHomeBlog';
import LeetCodeHomeBlog from './LeetCodeQuestions/LeetCodeHomeBlog';

const DSA = () => {
  const { subtopic } = useParams();

  const renderDSAContent = () => {
    switch (subtopic) {
      case 'algorithms':
        return <AlgorithmsHomeBlog />;
        case 'patterns':
        return <PatternsHomeBlog />;
        case 'leetcode-questions':
        return <LeetCodeHomeBlog />;
      default:
        return <div>DSA content not found.</div>;
    }
  };

  return (
    <div>
      <h1>{subtopic?.replace('-', ' ').toUpperCase()}</h1>
      {renderDSAContent()}
    </div>
  );

  
};

export default DSA;