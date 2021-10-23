import React from 'react'
import propTypes from 'prop-types'

const TableHeader = ({ onSort, selectedSort, columns }) => {
    const HandleSort = (item) => {
        if (selectedSort.path === item) {
            onSort({
                ...selectedSort,
                order: selectedSort.order === 'asc' ? 'desc' : 'asc'
            })
        } else {
            onSort({ path: item, order: 'asc' })
        }
    }
    return (
        <thead>
            <tr>
                {Object.keys(columns).map((column) => {
                    return (
                        <th
                            key={column}
                            role={columns[column].path && 'button'}
                            scope="col"
                            onClick={
                                columns[column].path
                                    ? () => {
                                        HandleSort(columns[column].path)
                                    }
                                    : undefined
                            }
                        >
                            {columns[column].name}
                            <i
                                className={
                                    (selectedSort.path ===
                                        columns[column].path &&
                                    selectedSort.order === 'asc'
                                        ? 'bi bi-caret-up-fill'
                                        : '') ||
                                    (selectedSort.path ===
                                        columns[column].path &&
                                    selectedSort.order === 'desc'
                                        ? 'bi bi-caret-down-fill'
                                        : '')
                                }
                            ></i>
                        </th>
                    )
                })}
            </tr>
        </thead>
    )
}

TableHeader.propTypes = {
    onSort: propTypes.func.isRequired,
    selectedSort: propTypes.object.isRequired,
    columns: propTypes.object.isRequired
}

export default TableHeader
