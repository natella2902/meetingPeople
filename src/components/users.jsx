import React, {useState} from "react";
import api from '../API'

const Users =  () => {
    const [users, setUsers] = useState(api.users.fetchAll)

    const getBasicClasses = (classList) => {
        let classes = 'badge rounded m-1 bg-'
        classes += classList
        return classes
    }
    const handleDelete = (userId) => {
        setUsers(users.filter(user => user._id !== userId))
    }
    const renderPhrase = (number) => {
        const lastChar = String(number)[String(number).length - 1]
        const exceptionNumbers = [11, 12, 13, 14]
        if(number === 0) {
            return 'Никто не тусанет с тобой сегодня'
        }
        if(exceptionNumbers.includes(number)) {
            return `${number} человек тусанет с тобой сегодня`
        }
        if(['2', '3', '4'].includes(lastChar)){
            return `${number} человека тусанет с тобой сегодня`
        } else {
            return `${number} человек тусанет с тобой сегодня`
        }
    }
    return(
        <>
            <h2 style={{fontSize: '30px'}} className={ users.length === 0 ? getBasicClasses('danger') :  getBasicClasses('primary')}>
                {renderPhrase(users.length)}
            </h2>
            <table className="table" style={users.length === 0 ? {display: 'none'} : {display: 'table'}}>
                <thead>
                <tr>
                    <th scope="col">Имя</th>
                    <th scope="col">Качества</th>
                    <th scope="col">Профессия</th>
                    <th scope="col">Встретился, раз</th>
                    <th scope="col">Оценка</th>
                    <th scope="col"></th>
                </tr>
                </thead>
                <tbody>
                    {users.map(user =>
                        <tr key={user._id}>
                            <td>{user.name}</td>
                            <td>{user.qualities.map(quality =>
                                <span key={quality._id}
                                    className={getBasicClasses(quality.color)}>
                                    {quality.name}
                                </span>)}
                            </td>
                            <td>{user.profession.name}</td>
                            <td>{user.completedMeetings}</td>
                            <td>{user.rate} / 5</td>
                            <td>
                                <button
                                    onClick={()=>{handleDelete(user._id)}}
                                    className={getBasicClasses('danger p-2')}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    )}

                </tbody>
            </table>
        </>
    )
}

export default Users