import React, { useState } from 'react'
import User from './user'
import Pagination from './pagination'
import { paginate } from '../utils/paginate'
import propTypes from 'prop-types'

const Users = ({ users: allUsers, ...rest }) => {
    const count = allUsers.length
    const pageSize = 4
    const [currentPage, setCurrentPage] = useState(1)
    const HandlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex)
    }
    const users = paginate(allUsers, currentPage, pageSize)
    return (
        <>
            <table
                className="table"
                style={count === 0 ? { display: 'none' } : { display: 'table' }}
            >
                <thead>
                    <tr>
                        <th scope="col">Имя</th>
                        <th scope="col">Качества</th>
                        <th scope="col">Профессия</th>
                        <th scope="col">Встретился, раз</th>
                        <th scope="col">Оценка</th>
                        <th scope="col">Избранное</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <User key={user._id} {...user} {...rest} />
                    ))}
                </tbody>
            </table>
            <Pagination
                countItems={count}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={HandlePageChange}
            />
        </>
    )
}

Users.propTypes = {
    users: propTypes.array.isRequired

}

export default Users
