import React, { useEffect, useState } from 'react'
import propTypes from 'prop-types'
import api from '../../api'

const UserSelect = ({ name, onChange, value }) => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        api.users.fetchAll().then((data) => setUsers(data))
    }, [])
    return (
        <select className="form-select"
            aria-label="Default select example"
            onChange={onChange}
            name={name}
            value={value}
        >
            <option value='def'>Выбирите пользователя</option>
            {users && users.map((user) =>
                <option
                    value={ user._id }
                    key={ user._id }>
                    {user.name}
                </option>)}
        </select>
    )
}

UserSelect.propTypes = {
    name: propTypes.string.isRequired,
    onChange: propTypes.func,
    value: propTypes.string
}

export default UserSelect
