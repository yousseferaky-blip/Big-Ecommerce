import   './About.css'
import  img1 from  './../../../Img/b1.png'
import  img2 from  './../../../Img/b2.jpg'
import Navbar from '../home/Navbar'
import Footer from '../footer/Footer'
import Setting from '../../../setting/Setting'
import { useTranslation } from 'react-i18next';
import {Helmet} from "react-helmet";

const About = () => {
  const [t, i18n] = useTranslation()
  return (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>About</title>
    </Helmet>
    <Navbar />
    <Setting />
        <div className="Banner">
         <img src={img1} />
        <h1 className="Banner-Title">#{t('know')}</h1>
        <p className="Banner-Paragraph">{t('lorem')}</p>
       </div>
  
       <div className="About-Us">
        <div className="About-Us-left">
            <img src={img2} />
        </div>
        <div className="About-Us-Right">
            <h1>{t('whoweare')}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum accusamus maiores voluptas tempora deserunt, sunt quidem itaque quis iusto veritatis, ratione esse placeat earum recusandae nostrum totam. Eius, sequi ullam!
            Delectus repudiandae, ut quod veniam odio nesciunt? Temporibus blanditiis, nostrum doloribus saepe omnis deserunt! Eum facilis nam recusandae enim, fuga animi optio soluta sunt voluptates. Laboriosam nobis ex omnis blanditiis.
            Nostrum aspernatur ut tempore sit, facere modi eos accusantium possimus atque, distinctio impedit quod ratione eaque, vero dolorem molestias blanditiis facilis non. Voluptatum excepturi molestiae consectetur omnis ullam laboriosam labore!</p>
           <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, optio. Iste, pariatur minus! Assumenda neque.</h6>
        </div>
       </div>
       <Footer />
     </>
  )
}

export default About