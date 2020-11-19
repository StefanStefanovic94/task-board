import React from "react"
import "./dropMenu.css"
import PropTypes from "prop-types"

// const items1 = [{
//     value: "v1",
//     name: "1"
// }
//     , {
//     value: "v2",
//     name: "2"
// }]

const DropMenu = ({ value, items, onSelect, label, err }) => {
    return (
        <div className="dropMenu">
            <label>{label}</label>
            <select value={value.value}
                onChange={(e) => {
                    const selectedValue = items.find(
                        (item) => item.value == e.target.value
                    );
                    onSelect(selectedValue);

                }}
            >
                <option disabled selected value> -- select an option -- </option>
                {items.map(item => {
                    return (<option value={item.value}>{item.name}</option>)
                })}
            </select>
            <p className="error">{err}</p>
        </div>

    )
}


DropMenu.propTypes = {
    value: PropTypes.string,
    items: PropTypes.instanceOf(Array),
    onSelect: PropTypes.func,
    label: PropTypes.string,
    err: PropTypes.string

}


export default DropMenu