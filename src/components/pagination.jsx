import React from 'react'
import _ from 'lodash'
import propTypes from 'prop-types'

const Pagination = ({ countItems, pageSize, currentPage, onPageChange }) => {
    const pageCount = Math.ceil(countItems / pageSize)
    const pages = _.range(1, pageCount + 1)
    if (pages === 1) {
        return null
    }
    return (
        <nav>
            <ul className="pagination">
                {pages.map((page) => {
                    return (
                        <li
                            className={
                                'page-item ' +
                                (page === currentPage ? 'active' : '')
                            }
                            key={page}
                        >
                            <a
                                className="page-link"
                                onClick={() => onPageChange(page)}
                            >
                                {page}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

Pagination.propTypes = {
    countItems: propTypes.number.isRequired,
    pageSize: propTypes.number.isRequired,
    currentPage: propTypes.number.isRequired,
    onPageChange: propTypes.func.isRequired
}

export default Pagination
