import React from "react";
import {getBasicClasses, renderPhrase} from "./utils";

const SearchStatus = ({peopleQuantity}) => {
    return (
            <>
                <h2 style={{fontSize: '30px'}} className={ peopleQuantity === 0 ? getBasicClasses('danger') :  getBasicClasses('primary')}>
                    {renderPhrase(peopleQuantity)}
                </h2>
            </>
        )
}

export default SearchStatus
