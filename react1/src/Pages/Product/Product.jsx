import s from './Product.module.css';
import { useParams } from 'react-router-dom';
import {catalog} from '../../data';
export default function ProductPage(props){
    const {id} = useParams();
    const product = catalog.find((product)=>product.id===+id);
    return(
        <div className="container">
            <div className={s.product}>
                <div className={s.product__img}>
                    <img src={product.productImg} alt="#" />
                </div>
                <div className={s.product__body}>
                    <h3 className={s.product__name}>{product.productName}</h3>
                    <p className={s.product__text}>{product.productText}</p>
                    <div className={s.product__pay}>
                        <p className={s.product__price}>{product.productPrice}$</p>
                        <button onClick={()=>{props.setCart([product.id, ...props.cart])}} className={s.toCart__btn}>В КОРЗИНУ</button>
                        <button className={s.like__btn}>
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_2221_16)">
                                <path d="M18 32.43C17.779 32.4293 17.5645 32.3555 17.39 32.22C11.83 27.9 7.99999 24.18 5.31999 20.51C1.89999 15.82 1.11999 11.49 2.99999 7.64C4.33999 4.89 8.18999 2.64 12.69 3.95C14.8355 4.56974 16.7075 5.89879 18 7.72C19.2925 5.89879 21.1644 4.56974 23.31 3.95C27.8 2.66 31.66 4.89 33 7.64C34.88 11.49 34.1 15.82 30.68 20.51C28 24.18 24.17 27.9 18.61 32.22C18.4354 32.3555 18.2209 32.4293 18 32.43ZM10.13 5.58C9.05924 5.53833 7.99736 5.78905 7.05833 6.30525C6.11931 6.82145 5.33859 7.58364 4.79999 8.51C3.24999 11.69 3.94999 15.23 6.93999 19.32C10.1176 23.4186 13.8384 27.0654 18 30.16C22.1609 27.0685 25.8817 23.425 29.06 19.33C32.06 15.23 32.75 11.69 31.2 8.52C30.2 6.52 27.2 4.93 23.86 5.87C22.789 6.1865 21.7962 6.72372 20.9454 7.44708C20.0946 8.17044 19.4047 9.06391 18.92 10.07C18.8446 10.2534 18.7165 10.4103 18.5518 10.5207C18.3871 10.6311 18.1933 10.69 17.995 10.69C17.7967 10.69 17.6029 10.6311 17.4382 10.5207C17.2735 10.4103 17.1453 10.2534 17.07 10.07C16.589 9.06139 15.9002 8.16583 15.0489 7.44202C14.1975 6.71821 13.2028 6.1825 12.13 5.87C11.48 5.6812 10.8069 5.5836 10.13 5.58Z" fill="#070B12"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_2221_16">
                                <rect width="36" height="36" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>
                        </button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}