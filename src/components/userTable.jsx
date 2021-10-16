import React from 'react'
import propTypes from 'prop-types'
import Bookmark from './bookmark'
import QualitiesList from './qualitiesList'
import { getBasicClasses } from './utils'
import Table from './table'
import { Link } from 'react-router-dom'

const UserTable = ({
    users,
    selectedSort,
    onToggleBookMark,
    onSort,
    onDelete,
    ...rest
}) => {
    const columns = {
        name: {
            path: 'name',
            name: 'Имя',
            component: (user) => (
                <Link to={`/users/${user._id}`}>{user.name}</Link>
            )
        },
        qualities: {
            name: 'Качества',
            component: (user) => <QualitiesList qualities={user.qualities} />
        },
        profession: { path: 'profession.name', name: 'Профессия' },
        completedMeetings: {
            path: 'completedMeetings',
            name: 'Встретился, раз'
        },
        rate: { path: 'rate', name: 'Оценка' },
        bookmark: {
            path: 'bookmark',
            name: 'Избранное',
            component: (user) => (
                <Bookmark
                    status={user.bookmark}
                    onClick={() => onToggleBookMark(user._id)}
                />
            )
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
