import SlickSlider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import s from './Slider.module.css';
import t1 from '../../assets/imgs/aesthetic.jpg';
import t2 from '../../assets/imgs/Banner.jpg';
import t3 from '../../assets/imgs/products/t3.jpg';

export default function Slider(){
    const settings = {
        dots:true,
        infinite:true,
        speed:500,
        slidesToShow:1,
        slidesToScroll:1
    }
    return(
        <>
        <h3 className={s.slider__title}>Галерея новой коллекции</h3>
        <div className={s.slider__place}>
            <SlickSlider {...settings}>
                <div className={s.slide}>
                    <img src={t1} alt="#" />
                </div>
                <div className={s.slide}>
                    <img src={t2} alt="#" />
                </div>
                <div className={s.slide}>
                    <img src={t3} alt="#" />
                </div>
            </SlickSlider>
        </div>
        </>
    )
}
