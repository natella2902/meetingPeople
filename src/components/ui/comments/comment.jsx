import React, { useEffect, useState } from 'react'
import propTypes from 'prop-types'
import api from '../../../api'

const Comment = ({ comment, onClick }) => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        api.users.fetchAll().then((data) => setUsers(data))
    }, [])
    const getUserName = () => {
        if (users && comment) {
            const user = users.filter((user) => user._id === comment.userId)
            if (user.length > 0) {
                return user[0].name
            }
        }
    }
    const getUserPostData = () => {
        if (comment) {
            const data = new Date(Number(comment.created_at))
            const month = data.toLocaleString('en-US', { month: 'long' })
            return `${data.getDate()} ${month}`
        }
    }
    return (
        <div className="bg-light card-body mb-3">
            <div className="row">
                <div className="col">
                    <div className="d-flex flex-start ">
                        <img
                            src={`https://avatars.dicebear.com/api/avataaars/${(
                                Math.random() + 1
                            )
                                .toString(36)
                                .substring(7)}.svg`}
                            className="rounded-circle shadow-1-strong me-3"
                            alt="avatar"
                            width="65"
                            height="65"
                        />
                        <div className="flex-grow-1 flex-shrink-1">
                            <div className="mb-4">
                                <div className="d-flex justify-content-between align-items-center">
                                    <p className="mb-1">
                                        { users && comment && getUserName() }
                                        <span className="small"> { comment && getUserPostData() } </span>
                                    </p>
                                    <button
                                        className="btn btn-sm text-primary d-flex align-items-center"
                                        onClick={ () => { onClick(comment._id) }}
                                    >
                                        <i className="bi bi-x-lg"></i>
                                    </button>
                                </div>
                                <p className="small mb-0">{comment.content}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Comment.propTypes = {
    userId: propTypes.string,
    content: propTypes.string,
    createdAt: propTypes.string,
    comment: propTypes.object,
    onClick: propTypes.func
}

export default Comment
