import { useParams } from 'react-router-dom'
import   './Product.css'
import { useEffect, useState } from 'react'
import { PRODUCT } from '../../../api/Api'
import Navbar from '../home/Navbar'
import Footer from '../footer/Footer'
import { Axios } from '../../../api/Axios'

const ProductDetails = () => {
    const param = useParams()
    const [product , setProduct] = useState([])
    
    useEffect(()=>{
        Axios.get(`/${PRODUCT}/${param.id}`)
        .then(data=>setProduct(data.data))
        .catch(err=> console.log(err))
    },[])
  return (
    <>
        <Navbar />
        <div className='Details'>
           {
            product.map(item=>{
                return(
                    <>
                    <div className='Details-Info'>
                        <h2>{item.title}</h2>
                        <div>
                            <h4 className='discount'>${item.discount}</h4>
                            <h4>${item.price}</h4>
                        </div>
                        <p>{item.description}</p>
                        <p>{item.About}</p>
                    </div>
                    </>
                )
            })
           }

        </div>
        <Footer />
    </>
  )
}

export default ProductDetails