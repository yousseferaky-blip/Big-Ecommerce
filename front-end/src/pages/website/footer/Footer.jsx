import   './Footer.css'
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const [t, i18n] = useTranslation()
    const countryCode = "+20" 
    const phoneNumber = "01023982624"
  return (
    <footer>
        <div>
            <ul>
                <li><a href='https://www.facebook.com/profile.php?id=100009392357660' target='_blank'><i class="fa-brands fa-facebook"></i></a></li>
                <li><a href='https://www.instagram.com/youssef_eraky.111/?hl=ar' target='_blank'><i class="fa-brands fa-instagram"></i></a></li>
                <li><a href='https://www.linkedin.com/in/youssef-eraky-183357257/' target='_blank'><i class="fa-brands fa-linkedin"></i></a></li>
                <li><a href={`https://wa.me/${countryCode}${phoneNumber}`} target='_blank'><i class="fa-brands fa-whatsapp"></i></a></li>
            </ul>
        </div>
        <div>
            <span>{t('footer')}</span>
        </div> 
        <div>
            <ul>
                <li><i class="fa-brands fa-cc-visa"></i></li>
                <li><i class="fa-brands fa-cc-paypal"></i></li>
                <li><i class="fa-brands fa-cc-mastercard"></i></li>
                <li><i class="fa-brands fa-cc-discover"></i></li>
                
            </ul>
        </div>
    </footer>
  )
}

export default Footer