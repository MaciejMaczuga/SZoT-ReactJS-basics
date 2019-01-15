import React from 'react';

import './style.css';

const Display = (props) => {
  return (
    <div className="counter__display">
      {props.counterValue}
    </div>
  );
};

export default Display;