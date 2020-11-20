import React from 'react';
import PropTypes from 'prop-types';

const EditButton = ({ value, deleteItem }) => {
  return (
    <button type="submit" onClick={deleteItem}>
      {value}
    </button>
  );
};

EditButton.propTypes = {
  value: PropTypes.string.isRequired,
  deleteItem: PropTypes.func.isRequired,
};

export default EditButton;
