import React from 'react'
import propTypes from 'prop-types'
import _ from 'lodash'

const BodyTable = ({ data, columns }) => {
    const renderContent = (item, column) => {
        if (columns[column].component) {
            const component = columns[column].component
            if (typeof component === 'function') {
                return component(item)
            }
            return component
        }
        return _.get(item, columns[column].path)
    }
    return (
        <tbody>
            {data.map((item) => (
                <tr key={item._id}>
                    {Object.keys(columns).map((column) => (
                        <td key={column}>{renderContent(item, column)}</td>
                    ))}
                </tr>
            ))}
        </tbody>
    )
}

BodyTable.propTypes = {
    data: propTypes.array.isRequired,
    columns: propTypes.object.isRequired
}

export default BodyTable
