import React from "react"
import PropTypes from "prop-types"

const EditButton = ({ value, deleteItem }) => {
    return (
        <button onClick={deleteItem}>{value}</button>
    )
}

EditButton.propTypes={
    value: PropTypes.string,
    deleteItem: PropTypes.func.isRequired
}

export default EditButton