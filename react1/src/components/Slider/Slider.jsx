import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import t1 from '../../assets/imgs/products/t1.jpg';
import t2 from '../../assets/imgs/products/t2.jpg';
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
        <h3 className="sllider__title">Слайдер</h3>
        <div className="slider__place">
            <Slider {...settings}>
                <div className="slide">
                    <img src={t1} alt="#" />
                </div>
                <div className="slide">
                    <img src={t2} alt="#" />
                </div>
                <div className="slide">
                    <img src={t3} alt="#" />
                </div>
            </Slider>
        </div>
        </>
    )
}
