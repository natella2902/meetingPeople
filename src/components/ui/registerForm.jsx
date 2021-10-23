import React, { useEffect, useState } from 'react'
import TextField from '../common/form/textField'
import { validator } from '../../utils/validator'
import api from '../../api'
import SelectField from '../common/form/selectField'
import RadioField from '../common/form/radioField'
import MultiSelectField from '../common/form/multiSelectField'
import CheckBoxField from '../common/form/checkBoxField'

const RegisterForm = () => {
    const [data, setData] = useState({
        email: '',
        password: '',
        profession: '',
        sex: 'male',
        qualities: [],
        licence: false
    })
    const [professions, setProfessions] = useState()
    const [qualities, setQualities] = useState({})
    const [errors, setErrors] = useState({})
    useEffect(() => {
        api.professions.fetchAll().then((data) => setProfessions(data), [])
        api.qualities.fetchAll().then((data) => setQualities(data), [])
    })
    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState, [target.name]: target.value
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
        },
        profession: {
            isRequired: {
                message: 'Необходимо выбрать профессию'
            }
        },
        licence: {
            isRequired: {
                message: 'Вы не можете использовтаь наш сервис без подтверждения лицензионного соглашения'
            }
        }
    }
    useEffect(() => {
        validate()
    }, [data])
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
        <form onSubmit={handleSubmit}>
            <TextField
                label="Введите email"
                name="email"
                id="email"
                value={data.email}
                onChange={handleChange}
                error={errors.email}
            />
            <TextField
                label="Введите пароль"
                type="password"
                name="password"
                id="password"
                value={data.password}
                onChange={handleChange}
                error={errors.password}
            />
            <SelectField
                label="Выберите вашу профессию"
                options={professions}
                defaultOption="Choose..."
                value={data.profession}
                onChange={handleChange}
                name="profession"
                error={errors.profession}
            />
            <RadioField
                label="Укажите ваш пол"
                options={[
                    { name: 'Male', value: 'male' },
                    { name: 'Female', value: 'female' },
                    { name: 'Other', value: 'other' }
                ]}
                value={data.sex}
                onChange={handleChange}
                name="sex"
            />
            <MultiSelectField
                options = {qualities}
                onChange={handleChange}
                name='qualities'
                label="Добавьте ваши качества"
                defaultValue={data.qualities}
            />
            <CheckBoxField
                name='licence'
                value={data.licence}
                onChange={handleChange}
                error={errors.licence}
            >
                <p>Подтверждаю <a href='#' style={{ cursor: 'pointer' }}>пользовательское соглашение</a></p>
            </CheckBoxField>
            <button
                disabled={!isValid}
                className="btn bg-primary w-100 mx-auto"
            >
                Submit
            </button>
        </form>
    )
}

export default RegisterForm
