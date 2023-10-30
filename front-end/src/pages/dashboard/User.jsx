import React, { useEffect, useState } from 'react'
import {  USER, USERS } from '../../api/Api'
import { Link } from 'react-router-dom';
import { Axios } from '../../api/Axios';
import TableShow from '../../component/dashboard/TableShow';
import { useTranslation } from 'react-i18next';

const User = () => {
    const [t, i18n] = useTranslation()
    const [users,setUsers] = useState([])
   
    useEffect(()=>{
        Axios.get(`/${USERS}`)
        .then(data=> setUsers(data.data))
        .catch(err=> console.log(err))
    },[])
   
         
      const header = [
        {
          key : 'name',
          name:'UserName'
        },
        {
           key : 'email',
          name:'Email'
        },
        {
           key : 'role',
          name:'Role'
        },
      ]  

  
    return (
        <div className='All-User'>
          <div className='d-flex align-items-center justify-content-between'>
            <h1>{t('userpage')}</h1>
            <Link className='btn btn-dark' to={'/dashboard/user/add'}>{t('adduser')}</Link>
          </div>
          <TableShow header={header} data={users} setUsers={setUsers}  delete={USER}/>
        </div>
      );

}

export default User