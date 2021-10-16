import React from 'react'
import propTypes from 'prop-types'

const SearchUsers = ({ onChange }) => {
    return (
        <input
            type="text"
            placeholder="Search..."
            onChange={onChange}
        />
    )
}

SearchUsers.propTypes = {
    onChange: propTypes.func.isRequired
}

export default SearchUsers
