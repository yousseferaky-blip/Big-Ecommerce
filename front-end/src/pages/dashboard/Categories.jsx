import React, { useEffect, useState } from 'react'
import {  CATEGORIES, CATEGORY} from '../../api/Api'
import { Link } from 'react-router-dom';
import { Axios } from '../../api/Axios';
import TableShow from '../../component/dashboard/TableShow';
import { useTranslation } from 'react-i18next';

const Categories = () => {
  const [t, i18n] = useTranslation()
  const [categories,setCategories] = useState([])
   
    useEffect(()=>{
        Axios.get(`/${CATEGORIES}`)
        .then(data=> setCategories(data.data))
        .catch(err=> console.log(err))
        console.log(categories);
    },[])
   
      const header = [
        {
          key:'title',
          name:'Title'
        },
        {
          key:'image',
          name:'Image',
        },
      ]  

      
    return (
        <div className='All-User'>
          <div className='d-flex align-items-center justify-content-between'>
            <h1>{t('categorypage')}</h1>
            <Link className='btn btn-dark' to={'/dashboard/product/add'}>{t('addcategory')}</Link>
          </div>
          <TableShow header={header} data={categories} setUsers={setCategories} delete={CATEGORY}/>
        </div>
      );
}
export default Categories