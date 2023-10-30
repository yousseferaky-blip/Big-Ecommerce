import {   faPlus, faUsers, faCartPlus, faUser, faProcedures, faPenNib } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
import { useEffect , useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Cookie from 'cookie-universal'
import { USER } from '../../api/Api'
import { Axios } from '../../api/Axios'
import { useTranslation } from 'react-i18next';

const SideBar = ({isOpen}) => {
    const [t, i18n] = useTranslation()
    const [user,setUser] = useState("")
    const Navigate = useNavigate()

    useEffect(()=>{
      Axios.get(`${USER}`)
      .then(data=>setUser(data.data))
      .catch(()=>Navigate("/login" ,{replace:true}))
    },[])
    const Cookies = Cookie()
    const token = Cookies.get("Ecommerce")

    return (
    <div className={isOpen ? "SideBar" : "sidebar"}>
       <>  
            <NavLink to={'users'} className={'NavLink'}>
                <FontAwesomeIcon icon={faUsers}/>
                <p className='m-0 text' >{t('users')}</p>
            </NavLink>
            
            <NavLink to={'/dashboard/user/add'} className={'NavLink'}>
                <FontAwesomeIcon icon={faPlus}/>
                <p className='m-0 text' >{t('adduser')}</p>
            </NavLink>

             <NavLink to={'/dashboard/writer'} className={'NavLink'}>
                <FontAwesomeIcon icon={faPenNib}/>
                <p className='m-0 text' >{t('writer')}</p>
            </NavLink>

             <NavLink to={'/dashboard/categories'} className={'NavLink'}>
                <FontAwesomeIcon icon={faCartPlus} />
                <p className='m-0 text' >{t('categories')}</p>
            </NavLink>

            <NavLink to={'/dashboard/products'} className={'NavLink'}>
                <FontAwesomeIcon icon={faProcedures} />
                <p className='m-0 text' >{t('products')}</p>
            </NavLink>

            <NavLink to={'/dashboard/product/add'} className={'NavLink'}>
                <FontAwesomeIcon icon={faPlus} />
                <p className='m-0 text' >{t('addproduct')}</p>
            </NavLink>
           
        </>
        
    </div>
  )
}

export default SideBar