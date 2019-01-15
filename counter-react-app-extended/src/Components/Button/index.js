import React from 'react';

import './style.css';

const Button = (props) => {
  const handleButtonClick = event => {
    event.preventDefault();
    props.handleClick();
  }

  return (
    <button
      className={props.classes}
      onClick={handleButtonClick}
    >
      {props.buttonContent}
    </button>
  );
};

export default Button;