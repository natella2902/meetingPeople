import {getBasicClasses} from "./utils";

const Quality = ({color, name}) => {

    return (
        <span className={getBasicClasses(color)}>
            {name}
        </span>
    )
}

export default Quality

