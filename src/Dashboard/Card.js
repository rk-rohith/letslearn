import React from 'react';
import './Card.css'; // Assuming you will add some CSS for styling

const Card = ({ title, content }) => {
  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      <p className="card-content">{content}</p>
    </div>
  );
};

export default Card;