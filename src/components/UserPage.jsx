import React, { useState, useEffect } from 'react'
import propTypes from 'prop-types'
import QualitiesList from './qualitiesList'
import { useHistory } from 'react-router-dom'
import api from '../api'

const UserPage = ({ id }) => {
    const [user, setUser] = useState()
    useEffect(() => {
        api.users.getById(id).then((data) => setUser(data))
    }, [])
    const history = useHistory()
    const onHandleClick = () => {
        history.push('/users')
    }
    return (
        <>
            { user
                ? <>
                    <h2>{ user.name }</h2>
                    <h3>Профессия: {user.profession.name}</h3>
                    <h4>completedMeetings: {user.completedMeetings}</h4>
                    <h4>{<QualitiesList qualities={user.qualities}/>}</h4>
                    <h3>rate: {user.rate}</h3>
                    <button className="btn bg-primary" type={'button'} onClick={onHandleClick}>All users</button>
                </>
                : 'Loading...'}
        </>
    )
}

UserPage.propTypes = {
    user: propTypes.object,
    name: propTypes.string,
    id: propTypes.string
}

export default UserPage
