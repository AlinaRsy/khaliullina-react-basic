import { useState } from "react";
import s from './Accordeon.module.css';
export default function Accordeon({title,text}){
    const [isActive,setIsActive] = useState(false);
    return(
        <>
        <div className={s.accordeon__item}>
            <div className={s.accotdeon__title} onClick={()=>setIsActive(!isActive)}>
                <p>{title}</p>
                <p>{isActive?'-':'+'}</p>
            </div>
            {
                isActive &&
                    <div className={s.accordeon__text}>{text}</div>
            }
        </div>
        </>
    )
}