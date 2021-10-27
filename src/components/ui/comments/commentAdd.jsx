import React, { useState } from 'react'
import UserSelect from '../userSelect'
import api from '../../../api'
import propTypes from 'prop-types'

const CommentAdd = ({ addNewCommentToState, pageId }) => {
    const initialState = { content: '', pageId: '', userId: '' }
    const [data, setData] = useState(initialState)
    const HandleSubmit = (e) => {
        e.preventDefault()
        console.log('Send!')
        api.comments.add(data)
        addNewCommentToState(data.pageId)
        setData(initialState)
    }
    const HandleChange = ({ target }) => {
        if (target) {
            setData((prevState) => ({
                ...prevState, pageId: pageId, [target.name]: target.value
            }))
        }
    }
    return (
        <form onSubmit={HandleSubmit}>
            <div className="card mb-2">
                <div className="card-body">
                    <h2>New comment</h2>
                    <div className="mb-4">
                        <UserSelect onChange={HandleChange} value={data.userId} name="userId"/>
                    </div>
                    <div className="mb-4">
                        <div className="form-floating has-validation">
                            <textarea className="form-control"
                                onChange={HandleChange}
                                name='content'
                                value={data.content}
                                placeholder="Leave a comment here"
                                id="floatingTextarea2"
                                style={{ height: '100px', resize: 'none' }}>
                            </textarea>
                            <label htmlFor="floatingTextarea2">Comments</label>
                        </div>
                    </div>
                    <div className="mb-4">
                        <button
                            className="btn bg-primary"
                            style={{ color: 'white' }}
                        >
                            Опубликовать
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}

CommentAdd.propTypes = {
    addNewCommentToState: propTypes.func,
    pageId: propTypes.string.isRequired
}

export default CommentAdd
