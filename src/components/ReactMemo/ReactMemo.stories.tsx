import {memo, useState} from "react";

export default {
    title: 'React.memo demo'
}

type NewMessagesCounterPropsType = {
    count: number
}

const NewMessagesCounter = ({count}:NewMessagesCounterPropsType) => {
    return <div>{count}</div>
}

type UsersPropsType = {
    users: Array<string>
}

const UsersSecret = ({users}: UsersPropsType) => {
    console.log("users")
    return <div>{
        users.map((u, i) => <div key={i}>{u}</div>)
    }
    </div>
}

const Users = memo(UsersSecret)

export const Example1 = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Dimych', 'Valera', 'Artem'])
    return <>
        <button onClick={() => setCounter(counter+1)}>+</button>
        <NewMessagesCounter count={counter}/>
        <Users users={users}/>
    </>
}

