import React from 'react'
import propTypes from 'prop-types'

const CheckBoxField = ({ value, name, onChange, children, error }) => {
    const HandleChange = () => {
        onChange({ name, value: !value })
    }
    const getInputClasses = () => {
        return 'form-check-input' + (error ? ' is-invalid' : '')
    }
    return (
        <div className="mb-4 form-check has-validation">
            <input
                type="checkbox"
                value=""
                id={name}
                onChange={HandleChange}
                checked={value}
                className={getInputClasses()}
            />
            <label className="form-check-label" htmlFor={name}>
                {children}
            </label>
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    )
}

CheckBoxField.propTypes = {
    value: propTypes.bool.isRequired,
    name: propTypes.string.isRequired,
    onChange: propTypes.func.isRequired,
    children: propTypes.oneOfType([propTypes.arrayOf(propTypes.node), propTypes.node]),
    error: propTypes.string
}

export default CheckBoxField
