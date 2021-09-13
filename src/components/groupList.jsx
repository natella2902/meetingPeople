import React from 'react'
import propTypes from 'prop-types'

const GroupList = ({ items, onItemSelect, valueProperty, contentProperty, selectedItem }) => {
    return (
        <ul className="list-group">
            {
                Object
                    .keys(items)
                    .map((item) =>
                        <li key={items[item][valueProperty]}
                            role='button'
                            className={'list-group-item' + (items[item] === selectedItem ? ' active' : '')}
                            onClick={() => onItemSelect(items[item])}
                        >
                            {items[item][contentProperty]}
                        </li>
                    )
            }
        </ul>
    )
}
GroupList.defaultProps = {
    valueProperty: '_id',
    contentProperty: 'name'
}
GroupList.propTypes = {
    items: propTypes.oneOfType([propTypes.object, propTypes.array]),
    valueProperty: propTypes.string.isRequired,
    contentProperty: propTypes.string.isRequired,
    onItemSelect: propTypes.func,
    selectedItem: propTypes.object
}
export default GroupList
