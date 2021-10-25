import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { localStorageId } from './../utils/CONST'
import propTypes from 'prop-types'
import TextField from './common/form/textField'
import SelectField from './common/form/selectField'
import RadioField from './common/form/radioField'
import MultiSelectField from './common/form/multiSelectField'
import api from '../api'

const UserEdit = () => {
    const [data, setData] = useState({
        name: '',
        email: '',
        profession: '',
        sex: '',
        qualities: []
    })
    const { userId } = useParams()
    const dataLocalStorage = localStorage.getItem(localStorageId)
    const [professions, setProfessions] = useState()
    const [qualities, setQualities] = useState()
    useEffect(() => {
        api.users.getById(userId).then((data) => setData(data), [])
    }, [])
    useEffect(() => {
        api.professions.fetchAll().then((data) => setProfessions(data), [])
        api.qualities.fetchAll().then((data) => setQualities(data), [])
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        if (dataLocalStorage) {
            const allUsers = JSON.parse(dataLocalStorage)
            const idx = allUsers.findIndex(user => user._id === userId)
            allUsers[idx] = data
            localStorage.setItem(localStorageId, JSON.stringify(allUsers))
            alert('Обновлено!')
        }
    }
    const handleChange = (target) => {
        if (target.name === 'profession') {
            const valueProf = professions.filter(prof => prof._id === target.value)[0]
            setData((prevState) => ({
                ...prevState, [target.name]: valueProf
            }))
        } else if (target.qualities) {
            setData((prevState) => ({
                ...prevState, qualities: target.qualities
            }))
        } else {
            setData((prevState) => ({
                ...prevState, [target.name]: target.value
            }))
        }
    }
    return (
        <>
            <h2>Edit page</h2>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Введите ваше имя"
                    name="name"
                    id="name"
                    value={data.name}
                    onChange={handleChange}
                />
                <TextField
                    label="Введите email"
                    name="email"
                    id="email"
                    value={data.email}
                    onChange={handleChange}
                />
                <SelectField
                    label="Выберите вашу профессию"
                    options={professions}
                    defaultOption="Choose..."
                    value={data.profession}
                    onChange={handleChange}
                    name="profession"
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
                <button
                    className="btn bg-primary"
                >
                    Submit
                </button>
            </form>
        </>

    )
}

UserEdit.propTypes = {
    id: propTypes.string
}

export default UserEdit
