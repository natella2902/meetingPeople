import React from 'react'
import propTypes from 'prop-types'
import { TableHeader, TableBody } from './index'

const Table = ({ onSort, selectedSort, columns, data }) => {
    return (
        <table className="table">
            <TableHeader {...{ onSort, selectedSort, columns }} />
            <TableBody {...{ data, columns }} />
        </table>
    )
}

Table.propTypes = {
    onSort: propTypes.func,
    columns: propTypes.object,
    data: propTypes.array,
    selectedSort: propTypes.object
}
export default Table
