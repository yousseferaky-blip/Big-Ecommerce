import React, { useEffect, useState } from 'react'
import { PRODUCT, PRODUCTS} from '../../api/Api'
import { Link } from 'react-router-dom';
import { Axios } from '../../api/Axios';
import { Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './dashboard.css'
import { useTranslation } from 'react-i18next';

const Product = () => {
  const [t, i18n] = useTranslation()
  const [products,setProducts] = useState([])
  async function handleDelete(id){
    try{
        const res = await Axios.delete(`${PRODUCT}/${id}`)
        const DeleTe = products.filter(item=>item.id != id)
        setProducts(DeleTe)
    }catch (err){
       console.log(err)
    }
  }
    useEffect(()=>{
        Axios.get(`/${PRODUCTS}`)
        .then(data=> setProducts(data.data))
        .catch(err=> console.log(err))
        
    },[])
      const header = [
        {
          key:'title',
          name:'Title'
        },
        {
          key:'description',
          name:'Description',
        },
        {
          key:'price',
          name:'Price',
        },
        {
          key:'discount',
          name:'Discount',
        },
        {
          key:'image',
          name:'Image',
        },
      ]  
      
      const HeaderShow = header.map(item =><th>{item.name}</th>)
      const dataShow = products.map((PRO,index)=>{
        return (
          <tr key={index}>
              <td>{PRO.title}</td>
              <td>{PRO.description}</td>
              <td>{PRO.price}</td>
              <td>{PRO.discount}</td>
              <td>
              {PRO.images.map((image) => {
                    return <img className='IMAGE' src={image.image} alt={image.alt} />;
              })}
               
              </td>
              <td>
                 <div>
                    <FontAwesomeIcon onClick={()=>handleDelete(PRO.id)} cursor={'pointer'} color='red' icon={faTrash} />
                 </div>
          </td>
          </tr>
        )
      })

    return (
        <div className='All-User'>
          <div className='d-flex align-items-center justify-content-between'>
            <h1>{t('productpage')}</h1>
            <Link className='btn btn-dark' to={'/dashboard/product/add'}>{t('addproduct')}</Link>
          </div>
          <Table striped>
          <thead>
            <tr>
              {HeaderShow}
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {dataShow}
          </tbody>
           </Table >
        </div>
      );
}
export default Product