import { Link, NavLink } from 'react-router-dom'
import   './Website.css'
import { useState ,useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCartShopping, faLightbulb, faMoon, faSquareXmark } from '@fortawesome/free-solid-svg-icons'
import { Axios } from '../../../api/Axios'
import Cookie from 'cookie-universal'
import { LOGOUT, USER } from '../../../api/Api'
import { useTranslation } from 'react-i18next';

const Navbar = () => {
    const [t, i18n] = useTranslation()
    const [user,setUser] = useState("")
    const [Mobil,setMobil] = useState(false)

    useEffect(()=>{
        Axios.get(`${USER}`)
        .then(data=>setUser(data.data))
      },[])
      const Cookies = Cookie()
      const token = Cookies.get("Ecommerce")

      async function handleLogOut(){
        try{
         const res = await Axios.get(`/${LOGOUT}`)
            window.location.pathname = '/login'
        }
        catch(err){
            console.log(err);
        }
    }
  return (
    <>
    <div className='Header'>
        <div className='Header-Logo'>
            <Link className='loogo' to='/'>{t('e-commerce')}</Link>
        </div>
            <ul  className={Mobil ? 'Nav-Link' : 'Nav-Mobil'}>
                <li><NavLink to={'/'}>{t('home')}</NavLink></li>
                <li><NavLink to={'/about'}>{t('about')}</NavLink></li>
                <li><NavLink to={'/products'}>{t('products')}</NavLink></li>
                {
                     user.role == '1995' ? <li><Link to={'/dashboard/products'}><button className='btn btn-primary'>{t('go-dashboard')}</button></Link></li> : ""
                }
               
                <li><Link to={'/login'}><button onClick={handleLogOut} className='btn btn-primary' >{t('logout')}</button></Link></li>
                
            </ul>
        <div className='Header-Icon' >
       
            <Link className='spaan' to={'/cart'}><FontAwesomeIcon icon={faCartShopping} className='FontAwesomeIcon fa-bars-fa-time '/></Link>
            <a className='fa-bars-fa-times' onClick={()=>setMobil(!Mobil)} >
            {
                Mobil? <FontAwesomeIcon className='FontAwesomeIcon fa-bars-fa-time' icon={faSquareXmark} />  : <FontAwesomeIcon className='FontAwesomeIcon fa-bars-fa-time' icon={faBars} />
            }
            </a>
           
        </div>
    </div> 
   
   
    </>
  )
}

export default Navbar