import React from 'react';
import './dropMenu.css';
import PropTypes from 'prop-types';

const DropMenu = ({ value, items, onSelect, label, err }) => {
  return (
    <div className="dropMenu">
      <label htmlFor="a">{label}</label>
      <select
        value={value.value}
        onChange={(e) => {
          const selectedValue = items.find(
            (item) => item.value.toString() === e.target.value.toString()
          );
          onSelect(selectedValue);
        }}
      >
        <option disabled selected>
          -- select an option --
        </option>
        {items.map((item) => {
          return <option value={item.value}>{item.name}</option>;
        })}
      </select>
      <p className="error">{err}</p>
    </div>
  );
};

DropMenu.propTypes = {
  value: PropTypes.string,
  items: PropTypes.instanceOf(Array).isRequired,
  onSelect: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  err: PropTypes.string.isRequired,
};

DropMenu.defaultProps = {
  value: {},
};

export default DropMenu;
