import React from 'react';
import './input.css';
import PropTypes from 'prop-types';

const Input = ({ placeholder, onChange, label, value, err }) => {
  const func = (e) => {
    onChange(e.target.value);
  };
  return (
    <div className="input">
      <label htmlFor="a">{label}</label>
      <input
        value={value}
        type="text"
        placeholder={placeholder}
        onChange={func}
      />
      <p>{err}</p>
    </div>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  err: PropTypes.string.isRequired,
};

export default Input;
