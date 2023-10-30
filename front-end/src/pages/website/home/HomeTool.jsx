import  img1 from './../../../Img/T1.jpg'
import  img2 from './../../../Img/T2.jpg'
import  img3 from './../../../Img/T3.jpg'
import './Website.css'
import { useTranslation } from 'react-i18next';

const HomeTool = () => {
  const [t, i18n] = useTranslation()

  return (
    <div className='HomeTool'>
        <div>
            <img src={img1}/>
            <h1>{t('work')}</h1>
        </div>
        <div>
            <img src={img2}/>
            <h1>{t('watch')}</h1>
        </div>
        <div>
            <img src={img3}/>
            <h1>{t('toys')}</h1>
        </div>
    </div>
  )
}

export default HomeTool