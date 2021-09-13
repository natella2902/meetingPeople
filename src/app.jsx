import React, { useState } from 'react'
import api from './API'
import Users from './components/users'

const App = () => {
    const initialStateUsers = api.users.fetchAll
    const initialState = initialStateUsers().map((user) => {
        return {
            ...user,
            status: false
        }
    })
    const [users, setUsers] = useState(initialState)

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
