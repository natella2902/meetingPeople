import React from 'react'
import {
    selectedFillIcon,
    selectedEmptyIcon,
    styleForSelectedIcon
} from './utils'
import propTypes from 'prop-types'

const Bookmark = ({ status, _id, onStatusChange }) => {
    const renderBookmark = (status) => {
        if (status) {
            return selectedFillIcon()
        }
        return selectedEmptyIcon()
    }
    return (
        <button
            style={styleForSelectedIcon()}
            onClick={() => onStatusChange(_id, status)}
        >
            {renderBookmark(status)}
        </button>
    )
}

Bookmark.propTypes = {
    status: propTypes.bool.isRequired,
    _id: propTypes.string.isRequired,
    onStatusChange: propTypes.func.isRequired
}

export default Bookmark
