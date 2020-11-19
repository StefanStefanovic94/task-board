import React from "react"
import "./input.css"
import PropTypes from "prop-types"

const Input = ({ placeholder, onChange, label, value, err }) => {
    const func = (e) => {
        onChange(e.target.value)
    }
    return (
        <div className="input">
            <label>{label}</label>
            <input value={value} type="text" placeholder={placeholder} onChange={func} /><p>{err}</p>
        </div>
    )
}

Input.propTypes = {
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    label: PropTypes.string,
    value: PropTypes.string,
    err: PropTypes.string

}

export default Input