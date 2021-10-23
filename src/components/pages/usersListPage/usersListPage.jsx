import React, { useState, useEffect } from 'react'
import Pagination from '../../common/pagination'
import { paginate } from '../../../utils/paginate'
import api from '../../../api'
import propTypes from 'prop-types'
import _ from 'lodash'
import GroupList from '../../common/groupList'
import SearchStatus from '../../ui/searchStatus'
import UserTable from '../../ui/userTable'
import SearchUsers from '../../ui/searchUsers'

const UsersListPage = () => {
    const pageSize = 6
    const [currentPage, setCurrentPage] = useState(1)
    const [professions, setProfessions] = useState()
    const [selectedProf, setSelectedProf] = useState()
    const [searchInput, setSearchInput] = useState()
    const [sortBy, setSortBy] = useState({ path: 'name', order: 'asc' })

    useEffect(() => {
        api.professions.fetchAll().then((data) => setProfessions(data), [])
    })
    useEffect(() => {
        setCurrentPage(1)
    }, [selectedProf])
    const [users, setUsers] = useState()
    useEffect(() => {
        api.users.fetchAll().then((data) => setUsers(data))
    }, [])
    const handleDelete = (userId) => {
        setUsers(users.filter((user) => user._id !== userId))
    }
    const handleToggleBookMark = (id) => {
        setUsers(
            users.map((user) => {
                if (user._id === id) {
                    return { ...user, bookmark: !user.bookmark }
                }
                return user
            })
        )
    }

    const HandlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex)
    }
    const HandlerSelectItem = (item) => {
        setSelectedProf(item)
    }
    const HandleSort = (item) => {
        setSortBy(item)
    }
    const clearFilter = () => {
        setSelectedProf()
    }
    const handleChange = ({ target }) => {
        setSearchInput(target.value.toLowerCase())
    }
    if (users) {
        let filteredUsers = users
        if (selectedProf) {
            filteredUsers = users.filter(
                (user) =>
                    JSON.stringify(user.profession) ===
                    JSON.stringify(selectedProf)
            )
        }
        if (searchInput) {
            filteredUsers = users.filter((user) =>
                user.name.toLowerCase().includes(searchInput)
            )
        }
        const count = filteredUsers.length
        const sortedUsers = _.orderBy(
            filteredUsers,
            [sortBy.path],
            [sortBy.order]
        )
        const usersCrop = paginate(sortedUsers, currentPage, pageSize)
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
                    <SearchUsers onChange={handleChange} />
                    {count > 0 && (
                        <UserTable
                            users={usersCrop}
                            onSort={HandleSort}
                            selectedSort={sortBy}
                            onToggleBookMark={handleToggleBookMark}
                            onDelete={handleDelete}
                        />
                    )}
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
    return 'Loading...'
}

UsersListPage.propTypes = {
    user: propTypes.object,
    users: propTypes.array,
    onToggleBookMark: propTypes.func
}

export default UsersListPage
