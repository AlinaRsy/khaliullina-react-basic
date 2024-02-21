import { useState, useEffect } from "react"
import { json } from "react-router-dom";
import s from './Users.module.css';
export default function UsersPage(){
    const [users, setUsers] = useState([]);
    async function fetchUsers(){
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        setUsers(users);
    }
    useEffect(()=>{
        fetchUsers()
    },[]);
    return(
        <div className="container">
            <div className={s.users}>
                <h4 className={s.users__title}>Пользователи</h4>
                {users.map((user)=>{
                    return <div className={s.user}>
                        <p className={s.username}>имя:{user.name}</p>
                        <p className={s.username}>email:{user.email}</p>
                    </div>
                    
                })}
            </div>
        </div>
        
    )
}