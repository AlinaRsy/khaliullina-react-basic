import Modal from 'react-modal';
import { useState } from 'react';
import s from './OrderModal.module.css'
export default function OrderModal({modalIsOpen, setModalIsOpen, productName}){
    
    function closeModal(){
        setModalIsOpen(false);
    }
    return(
        <>  
            <Modal isOpen={modalIsOpen}>
                <form>
                    <h3>Оформить заказ</h3>
                    <h6>Вы действительно хотите {productName}</h6>
                    <input type="text" placeholder='Ваш номер телефона'/>
                    <button onClick={closeModal}>Закрыть</button>
                </form>
            </Modal>
        </>
        
    )
}