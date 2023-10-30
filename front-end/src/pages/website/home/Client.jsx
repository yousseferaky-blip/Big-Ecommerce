import  img1 from './../../../Img/d7.jpg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"
import { useState } from 'react';
import ClientD from './ClientD';
import { useTranslation } from 'react-i18next';

const Client = () => {
    const [t, i18n] = useTranslation()
    const [client,setClient] = useState(ClientD)
    const settings = {
        dots: false,
        autoplay:true,
        fade:true,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div className='Client'>
        <p className='Client-reviews'>{t('reviews')}</p>
        <h1>{t('clients')}</h1>
        <div className='Client-Say'>
            <Slider {...settings}>
                {
                    client.map((item,index)=>{
                        return(
                            <div className='Client-Say-Card'>
                                <p>{item.say}</p>
                                <div>
                                    <img src={item.image}/> 
                                    <h4>{item.name}</h4>
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    </div>
  )
}

export default Client