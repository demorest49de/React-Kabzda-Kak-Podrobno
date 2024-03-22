import React, {useState} from "react"

export default {
    title: 'React.memo demo',
}

const MessageCounter = (props: { count: number }) => {
    return <div>{props.count}</div>
}

const SecretUsers = (props: { users: Array<string> }) => {
    console.log(' render users: ');
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}

const Users = React.memo(SecretUsers)

export const ReactMemo = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['dimich', 'valera', 'kayatja', 'natasha'])

    const addUser = () =>{
        setUsers([...users, 'Sveta ' + new Date().getTime()])
    }

    return <>
        <button onClick={() => {
            setCounter(counter + 1)
        }}> +
        </button>
        <button onClick={addUser}> add user
        </button>
        <MessageCounter count={counter}/>
        <Users users={users}/>
    </>
}