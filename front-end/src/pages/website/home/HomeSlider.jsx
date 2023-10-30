import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"
import img1 from './../../../Img/img1.png'
import img2 from './../../../Img/img2.webp'
import img3 from './../../../Img/img3.jpg'
import Setting from "../../../setting/Setting";
import { useTranslation } from 'react-i18next';

const HomeSlider = () => {
  const [t, i18n] = useTranslation()

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <>
    <Setting />
    <div className='HomeSlider-Container'>
    <Slider {...settings}>
      <div>
      <img src={img2}/>
       <h1>{t('here')}</h1>
       <p>{t('right-here')}</p>
      </div>
      <div>
       <img src={img1}/>
       <h1>{t('here')}</h1>
       <p>{t('right-here')}</p>
      </div>
      <div>
      <img src={img3}/>
        <h1>{t('here')}</h1>
        <p>{t('right-here')}</p>
      </div>
    </Slider>
  </div>
  </>
  )
}

export default HomeSlider