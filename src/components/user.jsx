import React from 'react'
import { getBasicClasses } from './utils'
import Quality from './quality'
import Bookmark from './bookmark'
import propTypes from 'prop-types'

const User = ({
    _id,
    name,
    qualities,
    profession,
    completedMeetings,
    rate,
    onDelete,
    ...rest
}) => {
    return (
        <>
            <tr>
                <td>{name}</td>
                <td>
                    {qualities.map((quality) => (
                        <Quality key={quality._id} {...quality} />
                    ))}
                </td>
                <td>{profession.name}</td>
                <td>{completedMeetings}</td>
                <td>{rate} / 5</td>
                <td>
                    <Bookmark _id={_id} {...rest} />
                </td>
                <td>
                    <button
                        onClick={() => onDelete(_id)}
                        className={getBasicClasses('danger p-2')}
                    >
                        Delete
                    </button>
                </td>
            </tr>
        </>
    )
}

User.propTypes = {
    _id: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    qualities: propTypes.array.isRequired,
    profession: propTypes.object.isRequired,
    completedMeetings: propTypes.number.isRequired,
    rate: propTypes.number.isRequired,
    onDelete: propTypes.func.isRequired
}

export default User
