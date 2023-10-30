import axios from 'axios'
import React, { useRef, useState } from 'react'
import { LOGIN, baseURL } from '../../api/Api'
import Loading from '../../loading/Loading'
import Cookie from 'cookie-universal'
import Form from 'react-bootstrap/Form';
import img from './../../Img/Google.png';
import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet'

const Login = () => {
  const Navigate = useNavigate()
//************************** Start State **************************
    const [form,setForm] = useState({
      name: "",
      email: "",
      password: "",
    })
    const [err,setErr] = useState("")
    const [loading,setLoading] = useState(false)

//************************** Start Focus **************************

    const Focus = useRef()
    useEffect(()=>{
      Focus.current.focus()
    },[])

//************************** Start Cookie **************************

const Cookies = Cookie()

//************************** Start Change **************************

function handleChange(e){
  setForm({...form,[e.target.name]: e.target.value})
}

//************************** Start Submit **************************
  async  function handleSubmit(e){
      e.preventDefault()
      setLoading(true)

      try{
      const res = await  axios.post(`${baseURL}/${LOGIN}`,{
          email:form.email,
          password:form.password
        })
        setLoading(false)

        const token = res.data.token
        const role = res.data.user.role
        const GO = role === '1995' ? '/dashboard/users' : role === '1996' ? '/dashboard/writer' :  '/'
        Cookies.set("Ecommerce",token)  
        window.location.pathname = `${GO}`
      }
      catch (err) {
        setLoading(false)
        if( err.response.status === 401 ){
          setErr("Wrong Email Or Password ")
        } else {
          setErr("Internal Server ERR ")
        }
      }
    }


  return (
    <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Login</title>
    </Helmet>
  {loading && <Loading />}
    <div className='container'>
        <div className='row ' style={{height:"100vh"}}>
          <Form className='form' onSubmit={handleSubmit}>
            <div className='custom-form'>
              <h1>Login Now</h1>
              <Form.Group className="form-custom" id="exampleForm.ControlInput1">
                  <Form.Control ref={Focus} onChange={handleChange} name='email'  value={form.email} id='email' type='email' placeholder='Enter Your Email..' required />
                  <Form.Label htmlFor='email'>Email:</Form.Label>
              </Form.Group>
              <Form.Group className="form-custom" id="exampleForm.ControlInput1">
                  <Form.Control onChange={handleChange} name='password'  value={form.password} id='password' type='password' placeholder='Enter Your Password..' minLength='6' required />
                  <Form.Label htmlFor='password'>Password:</Form.Label>
              </Form.Group>
              <button className='btn btn-primary '>Login</button>
              <Link to={'/register'}><button className='btn btn-primary '>Register</button></Link>
              <div className='google-btn'>
                <a href={'http://127.0.0.1:8000/login-google'}>
                <div className='google-icon-wrapper'>
                  <img className='google-icon' src={img} alt='sign-up-google'/>
                </div>
                <p className='btn-text'>
                  <b>Sign in With Google</b>
                </p>
                </a>
              </div>
              <div className='form-custom'>
               { err !== "" && <p className='err'>{err}</p>}
              </div>
            </div>
          </Form>
      </div>
    </div>
  </>
  )
}

export default Login