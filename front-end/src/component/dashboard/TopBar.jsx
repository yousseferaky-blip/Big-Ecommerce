import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import   './Bars.css'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import { LOGOUT, USER } from '../../api/Api'
import { Axios } from '../../api/Axios'
import { DropdownButton, DropdownItem } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

const TopBar = ({isOpen,setIsOpen}) => {
      const [t, i18n] = useTranslation()
    const [name,setName] = useState("")
    const NAVI = useNavigate()
    useEffect(()=>{
      Axios.get(`${USER}`)
      .then(data=>setName(data.data.name))
      .catch(()=>console.log("err"))
    },[])

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
    <div className='TopBar'>
        <div className='TopBar-Icon'>
            <div className='d-flex align-items-center gap-5'>
            <h3 className={isOpen ? "TopBar-Logo" : "TopBar-UnLogo"}>{t('e-commerce')}</h3>
            <FontAwesomeIcon onClick={()=>setIsOpen(!isOpen)} icon={faBars}  className='Bars'/>
            </div>
            <div className='d-flex align-items-center gap-5'>
            <Link to='/'><button className='btn btn-primary'>{t('gohome')}</button></Link>
                <DropdownButton id='dropdown-basic-button' title={name}>
                    <DropdownItem onClick={handleLogOut}>{t('logout')}</DropdownItem>
                </DropdownButton>
            </div>
        </div>
    </div>
  )
}

export default TopBar