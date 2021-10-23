import React from 'react'
import { getBasicClasses } from '../../utils'
import propTypes from 'prop-types'

const Quality = ({ color, name }) => {
    return <span className={getBasicClasses(color)}>{name}</span>
}

Quality.propTypes = {
    color: propTypes.string.isRequired,
    name: propTypes.string.isRequired
}

export default Quality
