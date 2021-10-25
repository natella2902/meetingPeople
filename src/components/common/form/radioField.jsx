import React from 'react'
import propTypes from 'prop-types'

const RadioField = ({ label, options, onChange, value, name }) => {
    const HandleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value })
    }
    return (
        <div className="mb-4 d-flex flex-column">
            <label className="form-label">{label}</label>
            <div>
                {options.map((option) => {
                    return (
                        <div
                            key={option.name + '_' + option.value}
                            className="form-check form-check-inline"
                        >
                            <label
                                className="form-check-label"
                                htmlFor={option.name + '_' + option.value}
                            >
                                {option.name}
                            </label>
                            <input
                                className="form-check-input"
                                type="radio"
                                name={name}
                                id={option.name + '_' + option.value}
                                value={option.value}
                                checked={option.value === value}
                                onChange={HandleChange}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

RadioField.propTypes = {
    label: propTypes.string.isRequired,
    options: propTypes.array.isRequired,
    name: propTypes.string.isRequired,
    value: propTypes.string,
    onChange: propTypes.func.isRequired
}
export default RadioField
