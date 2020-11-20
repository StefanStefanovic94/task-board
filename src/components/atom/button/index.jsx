import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

const Button = ({ onClick, value }) => {
  return (
    <button type="submit" className="button" onClick={onClick}>
      {value}
    </button>
  );
};
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Button;
