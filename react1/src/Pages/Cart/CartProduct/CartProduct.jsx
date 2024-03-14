import { Link } from 'react-router-dom';
import s from '../../../components/Catalog/CatalogCard/CatalogCard.module.css';

export default function CartProduct(props){
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
                    </div>
                </div>
            </div>
        </>
    )
}