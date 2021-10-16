import React, { useEffect, useState } from 'react'
import TextField from '../components/textField'
import { validator } from '../utils/validator'

const Login = () => {
    const [data, setData] = useState({ email: '', password: '' })
    const [errors, setErrors] = useState({})
    const handleChange = ({ target }) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }))
    }
    const validatorConfig = {
        email: {
            isRequired: {
                message: 'Электронная почта обязательна для заполнения'
            },
            isEmail: {
                message: 'Электронная почта введена не корректно'
            }
        },
        password: {
            isRequired: {
                message: 'Пароль обязателен для заполнения'
            },
            isCapitalSymbol: {
                message: 'Должна быть хотя бы одна заглавная буква'
            },
            isContainDigit: {
                message: 'Должна быть хотя бы одна цифра'
            },
            isMinLength: {
                message: 'Должно быть не менее 8 знаков',
                value: 8
            }
        }
    }
    useEffect(() => { validate() }, [data])
    const validate = () => {
        const errors = validator(data, validatorConfig)
        setErrors(errors)
        return Object.keys(errors).length === 0
    }
    const isValid = Object.keys(errors).length === 0
    const handleSubmit = (e) => {
        e.preventDefault()
        const isValid = validate()
        if (!isValid) return
        console.log('Send!')
    }
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3 p-4 shadow">
                    <h3 className="mb-4">Login</h3>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            label="Введите email"
                            name="email"
                            id="email"
                            value={data.email}
                            onChange={handleChange}
                            error ={errors.email}
                        />
                        <TextField
                            label="Введите пароль"
                            type="password"
                            name="password"
                            id="password"
                            value={data.password}
                            onChange={handleChange}
                            error ={errors.password}
                        />
                        <button disabled={!isValid} className="btn bg-primary w-100 mx-auto">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login