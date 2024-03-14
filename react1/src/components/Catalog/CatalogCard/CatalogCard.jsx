import { Link } from 'react-router-dom';
import s from './CatalogCard.module.css';
import OrderModal from '../../OrderModal/OrderModal';
import { useState } from 'react';
export default function CatalogCard(props){
    const [modalIsOpen, setModalIsOpen] = useState(false);
    function showModal(){
        setModalIsOpen(true);
    }
    return(
            <>
            <div class={s.catalog__item}>
                <Link to={`/catalog/${props.id}`} class={s.catalog__img}>
                    <img src={props.productImg} alt="#" />
                </Link>
                <div className={s.catalog__info}>
                    <div class={s.catalog__name}>
                        {props.productName} <br />
                        кол-во: {props.remains}
                    </div>
                    <div className={s.catalog__pay}>
                        <div class={s.catalog__price}>{props.productPrice}$</div>
                        {props.remains==0 ? <button onClick={showModal} className={`${s.catalog__cart} ${s.catalog__order}`}>
                            ЗАКАЗАТЬ
                        </button> : <button onClick={props.setCart} className={s.catalog__cart}>
                            <span>В КОРЗИНУ</span>
                        </button>}
                        
                    </div>
                </div>
            </div>
            <OrderModal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} productName={props.productName}/>
            </>

    )
}