import Cookie from 'cookie-universal'
import { useEffect, useState } from 'react'
import { Outlet, Navigate, useNavigate } from 'react-router-dom'
import { Axios } from '../../api/Axios'
import { USER } from '../../api/Api'
import Loading from '../../loading/Loading'
import Error403 from './Error403'

const RequireAuth = ({allowedRole}) => {
    const [user,setUser] = useState("")
    const Navigate = useNavigate()

    useEffect(()=>{
      Axios.get(`${USER}`)
      .then(data=>setUser(data.data))
      .catch(()=>Navigate("/login" ,{replace:true}))
    },[])
    const Cookies = Cookie()
    const token = Cookies.get("Ecommerce")

  return token ? (   
    user == "" ?( 
    <Loading /> 
    
    ) : allowedRole.includes(user.role)   ? ( 
        <Outlet />  
    ) :(
        <Error403 role={user.role}/>
      )
    )  : ( 
      <Navigate to={'/login'} replace={true}/>
    )  
}

export default RequireAuth