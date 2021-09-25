import React from 'react'
import propTypes from 'prop-types'
import Bookmark from './bookmark'
import { getBasicClasses } from './utils'
import QualitiesList from './qualitiesList'
import Table from './table'
import UserName from './userName'

const UserTable = ({ users, selectedSort, onToggleBookMark, onSort, onDelete, ...rest }) => {
    const columns = {
        name: { path: 'name', name: 'Имя', component: (user) => (<UserName user={user}/>) },
        qualities: { name: 'Качества', component: (user) => (<QualitiesList qualities={user.qualities}/>) },
        profession: { path: 'profession.name', name: 'Профессия' },
        completedMeetings: { path: 'completedMeetings', name: 'Встретился, раз' },
        rate: { path: 'rate', name: 'Оценка' },
        bookmark: {
            path: 'bookmark',
            name: 'Избранное',
            component: (user) => (
                <Bookmark
                    status={user.bookmark}
                    onClick={ () => onToggleBookMark(user._id)}
                />)
        },
        delete: {
            component: (user) => (
                <button
                    onClick={() => onDelete(user._id)}
                    className={getBasicClasses('danger p-2')}
                >
                    Delete
                </button>
            )
        }
    }
    return (
        <Table
            onSort={onSort}
            selectedSort={selectedSort}
            columns={columns}
            data={users}
        />
    )
}

UserTable.propTypes = {
    users: propTypes.array.isRequired,
    onSort: propTypes.func.isRequired,
    selectedSort: propTypes.object.isRequired,
    onToggleBookMark: propTypes.func.isRequired,
    onDelete: propTypes.func.isRequired
}

export default UserTable
