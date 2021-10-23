import React from 'react'
import Select from 'react-select'
import propTypes from 'prop-types'

const MultiSelectField = ({ options, onChange, name, label, defaultValue }) => {
    const optionArray =
    !Array.isArray(options) && typeof options === 'object'
        ? Object.keys(options).map((optionName) => ({
            label: options[optionName].name,
            value: options[optionName]._id
        }))
        : options
    const HandleChange = (value) => {
        onChange({ name: name, value })
    }
    return (
        <div className="mb-4">
            <label className="form-label">{label}</label>
            <Select
                defaultValue={defaultValue}
                isMulti
                options={optionArray}
                name={name}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={HandleChange}
                closeMenuOnSelect={false}
            />
        </div>)
}

MultiSelectField.propTypes = {
    options: propTypes.oneOfType([propTypes.array, propTypes.object]),
    onChange: propTypes.func,
    name: propTypes.string.isRequired,
    label: propTypes.string.isRequired,
    defaultValue: propTypes.array.isRequired
}

export default MultiSelectField
