import s from './Search.module.css';
export default function Search({value, onChange}){
    
    return(
        <from className={s.search__form} onSubmit={(event)=>event.preventDefault()}>
            <input onChange={onChange} value={value} type="text" className={s.search__input} placeholder='ПОИСК ПО ТОВАРАМ'/>
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M31.4999 31.5L24.9854 24.9855M24.9854 24.9855C26.0998 23.8712 26.9837 22.5483 27.5868 21.0923C28.1899 19.6364 28.5002 18.0759 28.5002 16.5C28.5002 14.9241 28.1899 13.3636 27.5868 11.9077C26.9837 10.4517 26.0998 9.12883 24.9854 8.0145C23.8711 6.90016 22.5482 6.01623 21.0923 5.41316C19.6363 4.81008 18.0758 4.49969 16.4999 4.49969C14.924 4.49969 13.3636 4.81008 11.9076 5.41316C10.4517 6.01623 9.12877 6.90016 8.01444 8.0145C5.76395 10.265 4.49963 13.3173 4.49963 16.5C4.49963 19.6827 5.76395 22.735 8.01444 24.9855C10.2649 27.236 13.3173 28.5003 16.4999 28.5003C19.6826 28.5003 22.7349 27.236 24.9854 24.9855Z" stroke="#070B12" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </from>
    )
}