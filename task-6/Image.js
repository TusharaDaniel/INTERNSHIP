import React from 'react';
import './Image.css';

function Image({ src, onClick }) {
  return (
    <div className="image" onClick={onClick}>
      <img src={src} alt="" />
    </div>
  );
}

export default Image;
