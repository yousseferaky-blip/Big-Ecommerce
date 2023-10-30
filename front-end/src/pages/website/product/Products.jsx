import   './Product.css'
import img1 from './../../../Img/d7.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesRight, faBagShopping, faEye } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Axios } from '../../../api/Axios'
import { PRODUCTS } from '../../../api/Api'
import Navbar from '../home/Navbar'
import Footer from '../footer/Footer'
import Setting from '../../../setting/Setting'
import { useTranslation } from 'react-i18next';
import Pagination from '../../dashboard/Pagination'
import ProductList from '../../dashboard/ProductList'
import { Helmet } from 'react-helmet'

const Products = ({AddProduct}) => {
    const [t, i18n] = useTranslation()
    const [product , setProduct] = useState([])
    const [currentPage,setCurrentPage] = useState(1)

    useEffect(()=>{
        Axios.get(`/${PRODUCTS}`)
        .then(data=>setProduct(data.data))
        .catch(err=> console.log(err))
    },[])
    
      const Product_Per_Page = 6    
      const Pages = Math.ceil(product.length / Product_Per_Page)
      const StartIndex = (currentPage - 1) * Product_Per_Page
      const FinishIndex = currentPage  * Product_Per_Page
      const orderedProduct = product.slice(StartIndex,FinishIndex )
      
  return (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Products</title>
    </Helmet>
    <Navbar />
    <Setting />
    <div className='Products-Page'>
        <div className='Products-Page-Logo'>
            <img src={img1}/>
            <div className='Products-Page-Logo-Info'>
                <h1>{t('products')}</h1>
                <h3><Link className='HOOME' to={'/'}>{t('home')}</Link> <FontAwesomeIcon style={{width:'20px'}} icon={faAnglesRight} />{t('products')}</h3>
            </div>
        </div>
        <div className='Products-Page-Logo-PRO'>
            <ProductList product={orderedProduct} AddProduct={AddProduct}/>
        </div>
        <div>
            <Pagination Pages={Pages} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        </div>
    </div>
    <Footer />
 </> )
}

export default Products