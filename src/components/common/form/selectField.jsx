import React from 'react'
import propTypes from 'prop-types'

const SelectField = ({
    label,
    options,
    value,
    defaultOption,
    name,
    onChange,
    error
}) => {
    const getSelectClasses = () => {
        return 'form-select' + (error ? ' is-invalid' : '')
    }
    const HandleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value })
    }
    return (
        <div className="mb-4">
            <label htmlFor="validationCustom04" className="form-label">
                {label}
            </label>
            <select
                className={getSelectClasses()}
                id="validationCustom04"
                value={value}
                name={name}
                onChange={HandleChange}
            >
                <option disabled value="">
                    {defaultOption}
                </option>
                {options &&
                    options.map((option) => (
                        <option key={option._id} value={option._id}>
                            {option.name}
                        </option>
                    ))}
            </select>
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    )
}

SelectField.propTypes = {
    label: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    value: propTypes.string,
    onChange: propTypes.func.isRequired,
    defaultOption: propTypes.string.isRequired,
    options: propTypes.oneOfType([propTypes.object, propTypes.array]),
    error: propTypes.string
}

export default SelectField
