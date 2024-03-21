import {catalog} from '../../data';
import CartProduct from './CartProduct/CartProduct';
import s from './CartPage.module.css';
export default function CartPage({cart}){
    const cartProducts = cart.map(id=>catalog.find(product=>product.id == id));
    return(
        <>
            <div className="container">
            <h2 className={s.cart__title}>Корзина</h2>
            <h5 className={s.cart__sum}>
                Сумма к оплате: {cartProducts.reduce((sum, current)=>sum+current.productPrice, 0)}$
            </h5>
            <div className={s.cart__list}>
            {   
                cartProducts.map(cartProduct=>
                    {
                        return <CartProduct {...cartProduct}/>
                    })
            }
            </div>
            
            </div>
            
        </>
    )
}