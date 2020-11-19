import React from "react"
import PropTypes from "prop-types"
import "./button.css"

const Button = ({ onClick, value }) => {
    return (
        <button className="button" onClick={onClick}>{value}</button>
    )
}
Button.propTypes = {
    onClick: PropTypes.func,
    value: PropTypes.string
}




export default Button