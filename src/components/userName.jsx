import React from 'react'
import propTypes from 'prop-types'
import { Link } from 'react-router-dom'

const UserName = ({ user }) => {
    return (
        <>
            <h6><Link to={`/users/${user._id}`}>{user.name}</Link></h6>
        </>
    )
}

UserName.propTypes = {
    user: propTypes.object
}

export default UserName
