import React from 'react'
import Select from 'react-select'
import propTypes from 'prop-types'

const MultiSelectField = ({ options, onChange, name, label, defaultValue }) => {
    const optionArray =
    !Array.isArray(options) && typeof options === 'object'
        ? Object.keys(options).map((optionName) => ({
            label: options[optionName].name,
            value: options[optionName]._id,
            color: options[optionName].color
        }))
        : options
    const defaultValueMute = defaultValue.map((option) => ({
        label: option.name,
        value: option._id,
        color: option.color
    }))
    const HandleChange = (value) => {
        const updQualities = value.map(val => ({ name: val.label, _id: val.value, color: val.color }))
        onChange({ [name]: updQualities })
    }
    return (
        <div className="mb-4">
            <label className="form-label">{label}</label>
            <Select
                value={defaultValueMute}
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
    defaultValue: propTypes.array
}

export default MultiSelectField
