import Modal from 'react-modal';
import { useState } from 'react';
import s from './OrderModal.module.css'
export default function OrderModal({modalIsOpen, setModalIsOpen, productName}){
    
    function closeModal(){
        setModalIsOpen(false);
    }
    return(
        <>  
            <Modal className={s.modal} isOpen={modalIsOpen}>
                <form className={s.form}>
                    <h3 className={s.title}>Оформить заказ</h3>
                    <h6 className={s.text}>Вы действительно хотите оформить заказ на {productName}?</h6>
                    <input className={s.input} type="text" placeholder='Ваш номер телефона'/>
                    <button className={s.btn} onClick={closeModal}>Закрыть</button>
                </form>
            </Modal>
        </>
        
    )
}