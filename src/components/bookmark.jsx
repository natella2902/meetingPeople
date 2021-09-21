import React from 'react'
import propTypes from 'prop-types'

const BookMark = ({ status, ...rest }) => {
    return (
        <button {...rest}>
            <i className={'bi bi-bookmark' + (status ? '-heart-fill' : '')}></i>
        </button>
    )
}
BookMark.propTypes = {
    status: propTypes.bool

}
export default BookMark
