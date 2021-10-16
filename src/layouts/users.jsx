import React from 'react'
import UserPage from '../components/UserPage'
import { useParams } from 'react-router-dom'
import UserList from '../components/userList'

const Users = () => {
    const params = useParams()
    const { userId } = params
    return <>{userId ? <UserPage id={userId} /> : <UserList />}</>
}

export default Users
