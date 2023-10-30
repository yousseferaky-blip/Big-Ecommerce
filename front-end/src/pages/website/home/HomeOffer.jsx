import { useState } from 'react'
import HomeOfferD from './HomeOfferD'
import './Website.css'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

const HomeOffer = () => {
    const [Offer,setOffer] = useState(HomeOfferD)
    const [t, i18n] = useTranslation()

  return (
    <div className='HomeOffer'>
        <h1>{t('offer')}</h1>
        <div className='HomeOffer-Info'>
            {
                Offer.map((item,index)=>{
                    return(
                        <div key={index}>
                            <Link to={'/products'}><div className='image'><img src={item.image}/></div></Link>
                            <h5><a>{item.dis}</a></h5>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default HomeOffer