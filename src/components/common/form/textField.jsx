import React, { useState } from 'react'
import propTypes from 'prop-types'

const TextField = ({ label, name, type, value, onChange, error }) => {
    const [showPassword, setShowPassword] = useState(false)
    const togglePassword = () => {
        setShowPassword((prevState) => !prevState)
    }
    const getInputClasses = () => {
        return 'form-control' + (error ? ' is-invalid' : '')
    }
    const HandleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value })
    }
    return (
        <>
            <div className="mb-4">
                <label htmlFor="email">{label}</label>
                <div className="input-group has-validation">
                    <input
                        className={getInputClasses()}
                        id={name}
                        type={showPassword ? 'text' : type}
                        value={value}
                        name={name}
                        onChange={HandleChange}
                    />
                    {type === 'password' && (
                        <button
                            className="btn btn-outline-secondary"
                            type="button"
                            onClick={togglePassword}
                        >
                            <i
                                className={
                                    'bi bi-eye' + (showPassword ? '-slash' : '')
                                }
                            ></i>
                        </button>
                    )}
                    {error && <div className="invalid-feedback">{error}</div>}
                </div>
            </div>
        </>
    )
}

TextField.defaultProps = {
    type: 'text'
}

TextField.propTypes = {
    label: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    type: propTypes.string.isRequired,
    value: propTypes.string.isRequired,
    onChange: propTypes.func.isRequired,
    error: propTypes.string
}

export default TextField
