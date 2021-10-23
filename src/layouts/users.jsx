import React from 'react'
import { useParams } from 'react-router-dom'
import UsersListPage from '../components/pages/usersListPage/usersListPage'
import UserPage from '../components/pages/userPage/userPage'

const Users = () => {
    const params = useParams()
    const { userId } = params
    return <>{userId ? <UserPage id={userId} /> : <UsersListPage />}</>
}

export default Users
