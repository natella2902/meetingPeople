import React, { useState, useEffect } from 'react'
import User from './user'
import Pagination from './pagination'
import { paginate } from '../utils/paginate'
import api from '../api'
import propTypes from 'prop-types'
import GroupList from './groupList'
import SearchStatus from './searchStatus'

const Users = ({ users: allUsers, ...rest }) => {
    const pageSize = 2
    const [currentPage, setCurrentPage] = useState(1)
    const [professions, setProfessions] = useState()
    const [selectedProf, setSelectedProf] = useState()
    useEffect(() => {
        api.professions.fetchAll().then((data) => setProfessions(data))
    })
    useEffect(() => {
        setCurrentPage(1)
    }, [selectedProf])
    const HandlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex)
    }
    const HandlerSelectItem = (item) => {
        setSelectedProf(item)
    }
    const clearFilter = () => {
        setSelectedProf()
    }
    const filteredUsers = selectedProf
        ? allUsers.filter((user) => user.profession._id === selectedProf)
        : allUsers
    const count = filteredUsers.length
    const users = paginate(filteredUsers, currentPage, pageSize)
    return (
        <div className="d-flex">
            {professions && (
                <div className="d-flex flex-column flex-shrink-0 p-3">
                    <GroupList
                        items={professions}
                        onItemSelect={HandlerSelectItem}
                        selectedItem={selectedProf}
                    />
                    <button
                        className="btn btn-secondary m-2"
                        onClick={clearFilter}
                    >
                        Очистить фильтр
                    </button>
                </div>
            )}
            <div className="d-flex flex-column w-100">
                <SearchStatus peopleQuantity={count} />
                <table
                    className="table"
                    style={
                        count === 0 ? { display: 'none' } : { display: 'table' }
                    }
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
                <div className="d-flex justify-content-center">
                    <Pagination
                        countItems={count}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChange={HandlePageChange}
                    />
                </div>
            </div>
        </div>
    )
}

Users.propTypes = {
    users: propTypes.array.isRequired
}

export default Users
