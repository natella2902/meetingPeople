import React, { useEffect, useState } from 'react'
import Comment from './comment'
import api from '../../../api'
import CommentAdd from './commentAdd'
import propTypes from 'prop-types'

const CommentsList = ({ userId }) => {
    const [comments, setComments] = useState()
    useEffect(() => {
        api.comments.fetchCommentsForUser(userId).then((data) => {
            data.sort((a, b) => b.created_at.toString() - a.created_at.toString())
            setComments(data)
        })
    }, [])
    const onHandleClick = (id) => {
        api.comments.remove(id)
        setComments(comments.filter(comment => comment._id !== id))
    }
    const addNewCommentToState = (userId) => {
        api.comments.fetchCommentsForUser(userId).then((data) => {
            data.sort((a, b) => b.created_at.toString() - a.created_at.toString())
            setComments(data)
        })
    }
    return (
        <>  <CommentAdd pageId={userId} addNewCommentToState={addNewCommentToState}/>
            {comments && comments.length !== 0 && (<div className="card mb-3">
                <div className="card-body">
                    <h2>Comments</h2>
                    <hr/>
                    {comments && comments.map((comment) => <Comment key={comment._id} onClick={onHandleClick} comment={comment}/>)}
                </div>
            </div>)}
        </>
    )
}

CommentsList.propTypes = {
    userId: propTypes.string.isRequired
}

export default CommentsList
