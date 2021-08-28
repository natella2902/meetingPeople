import {selectedFillIcon, selectedEmptyIcon, styleForSelectedIcon} from "./utils";

const Bookmark = ({status, _id, onStatusChange}) => {
    const renderBookmark = (status) => {
        if(status) {
            return selectedFillIcon()
        }
        return selectedEmptyIcon()
    }
    return(
        <button style={styleForSelectedIcon()}
            onClick={() =>(onStatusChange(_id, status))}
        >
            {renderBookmark(status)}
        </button>
    )
}

export default Bookmark