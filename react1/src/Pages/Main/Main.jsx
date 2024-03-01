import Banner from "./Banner/Banner";
import Accordeon from "../../components/Accordeon/Accordeon";
import s from "./Main.module.css";
import faqImg from '../../assets/imgs/aesthetic.jpg';
import Slider from '../../components/Slider/Slider';
export default function MainPage(){
    return(
        <>
            <Banner/>
            <div className={s.faq}>
                <div className={s.accordeon}>
                    <Accordeon title="Почему именно наш бутик?" text="Потому что потому Потому что потому Потому что потому Потому что потому"/>
                    <Accordeon title="Сколько ног у сороконожки?" text="Возможно 40, или больше, или меньше... Я не знаю"/>
                    <Accordeon title="Что такое fashion?" text="Fashion is my profession Fashion is my profession Fashion is my profession Fashion is my profession Fashion is my profession Fashion is my profession"/>
                    <Accordeon title="Почему именно наш бутик?" text="Потому что потому Потому что потому Потому что потому Потому что потому"/>
                    <Accordeon title="Сколько ног у сороконожки?" text="Возможно 40, или больше, или меньше... Я не знаю"/>
                </div>
                <div className={s.faq__img}>
                    <img src={faqImg} alt="#" />
                </div>
            </div>
            <div className="container">
            <Slider/>
            </div>
            
            
            
        </>
    )
}