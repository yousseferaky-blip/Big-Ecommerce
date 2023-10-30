import { faBagShopping, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';

const ProductList = ({product,AddProduct}) => {

    const AllProducts = product.map((item,index)=>{
        return (
          <div key={index} className='Products-Page-Logo-Cart'>
                {item.images.map((image) => {
                    return <img className='IMAGE' src={image.image} alt={image.alt} />;
              })}
              <div className='Show-Add'>
                <Link to={`/${item.id}`}><FontAwesomeIcon className='Show-Add-i' icon={faEye} /></Link>
                <FontAwesomeIcon onClick={()=>AddProduct(item)} className='Show-Add-i' icon={faBagShopping} />
              </div>
              <div className='Products-Page-Logo-Cart-Info'>
                 <h3>{item.title}</h3>
                 <p>{item.description}</p>
                 <div>
                    <h4 className='discount'>${item.discount}</h4>
                    <h4>${item.price}</h4>
                 </div>
              </div>
          </div>
        )
      })
  return (
    <>
        {AllProducts}
    </>
  )
}

export default ProductList

    //   const Product_Per_Page = 3
    //   const Pages = Math.ceil(products.length / Product_Per_Page)
    //   const StartIndex = (currentPage - 1) * Product_Per_Page
    //   const FinishIndex = currentPage  * Product_Per_Page
    //   const orderedProduct = products.slice(StartIndex,FinishIndex )