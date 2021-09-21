import React from 'react'
import HeaderTable from './headerTable'
import BodyTable from './bodyTable'
import propTypes from 'prop-types'

const Table = ({ onSort, selectedSort, columns, data }) => {
    return (
        <table
            className="table"
        >
            <HeaderTable {...{ onSort, selectedSort, columns }}/>
            <BodyTable {...{ data, columns }}/>
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
