import React from 'react'
import { getBasicClasses, renderPhrase } from '../utils'
import propTypes from 'prop-types'

const SearchStatus = ({ peopleQuantity }) => {
    return (
        <>
            <h2
                style={{ fontSize: '30px' }}
                className={
                    peopleQuantity === 0
                        ? getBasicClasses('danger')
                        : getBasicClasses('primary')
                }
            >
                {renderPhrase(peopleQuantity)}
            </h2>
        </>
    )
}

SearchStatus.propTypes = {
    peopleQuantity: propTypes.number.isRequired
}

export default SearchStatus
