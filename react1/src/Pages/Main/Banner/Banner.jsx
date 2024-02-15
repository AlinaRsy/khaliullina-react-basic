import bannerImg from '../../../assets/imgs/Banner.jpg';
import s from './Banner.module.css';
export default function Banner(){
    return(
        <div className={s.banner}>
            <img className={s.banner__img} src={bannerImg} alt="#"/>
            <div className={`${s.banner__container} container`}>
                <div className={s.banner__content}>
                    <p className={s.banner__text}>
                    Fashion is a term used interchangeably to describe the creation of clothing, footwear, accessories, cosmetics, and jewellery of different cultural aesthetics. Based on this, it turns out that a fashion boutique is a small store of fashionable, expensive clothes.
                    </p>
                    <a href='/' className={s.banner__btn}>
                        ПЕРЕЙТИ В КАТЕГОРИИ
                    </a>
                </div>
            </div>
            
        </div>
    )
}