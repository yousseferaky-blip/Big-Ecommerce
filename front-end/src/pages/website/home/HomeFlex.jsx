import img1 from './../../../Img/b3.jpg'
import img2 from './../../../Img/b4.jpg'
import img3 from './../../../Img/b5.jpg'
import { useTranslation } from 'react-i18next';

const HomeFlex = () => {
    const [t, i18n] = useTranslation()
  return (
    <div className='HomeFlex'>
        <div className='HomeFlex-Left'>
            <img src={img1}/>
            <h2>{t('brand')}</h2>
        </div>
        <div className='HomeFlex-Right'>
            <div>
                <img src={img2}/>
                <h2>{t('franchies')}</h2>
            </div>
            <div>
                <img src={img3}/>
                <h2>{t('location')}</h2>
            </div>
        </div>
    </div>
  )
}

export default HomeFlex