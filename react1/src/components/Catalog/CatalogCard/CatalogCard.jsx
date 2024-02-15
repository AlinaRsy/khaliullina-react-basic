import s from './CatalogCard.module.css';
export default function CatalogCard(props){
    return(
            <div class={s.catalog__item}>
                <div class={s.catalog__img}>
                    <img src={props.productImg} alt="#" />
                </div>
                <div className={s.catalog__info}>
                    <div class={s.catalog__name}>
                        {props.productName}
                    </div>
                    <div className={s.catalog__pay}>
                        <div class={s.catalog__price}>{props.productPrice}$</div>
                        <a href="#" className={s.catalog__cart}>
                            <span>В КОРЗИНУ</span>
                        </a>
                    </div>
                </div>
            </div>
    )
}