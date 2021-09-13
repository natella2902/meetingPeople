import React, { useEffect, useState } from 'react'
import api from './api'
import Users from './components/users'

const App = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        api.users.fetchAll().then((data) => setUsers(data.map(user => {
            return {
                ...user, status: false
            }
        })))
    })
    const handleDelete = (userId) => {
        setUsers(users.filter((user) => user._id !== userId))
    }

    const statusChange = (userId, status) => {
        const newUsers = [...users]
        const userElementIndex = newUsers.findIndex((el) => el._id === userId)
        newUsers[userElementIndex].status = !status
        setUsers(newUsers)
    }

    return (
        <>
            <Users
                users={users}
                onDelete={handleDelete}
                onStatusChange={statusChange}
            />
        </>
    )
}

export default App
