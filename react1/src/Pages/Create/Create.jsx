import s from './Create.module.css';
import { useEffect, useState } from 'react';
export default function CreatePage(){
    const [message, setMessage] = useState('');
    function createForm(event){
        event.preventDefault();
        const formData = new FormData(event.target);
        fetch('https://jsonplaceholder.typicode.com/posts',{
            method: "POST",
            body: formData
        });
        event.target.reset();
        setMessage('Форма отправлена');
    }
    return(
        <form onSubmit={createForm} className={s.form}>
            <h3 className={s.form__title}>Добавление товара</h3>
            <input type="text" className={s.form__input} name='title' placeholder='Название'/>
            <input type="text" className={s.form__input} name='body' placeholder='Текст'/>
            <button className={s.form__btn} type='submit'>Добавить</button>
            {message}
        </form>
    )
}