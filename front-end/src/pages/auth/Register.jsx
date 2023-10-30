import axios from 'axios'
import React, { useState } from 'react'
import { REGISTER, baseURL } from '../../api/Api'
import Loading from '../../loading/Loading'
import Cookie from 'cookie-universal'
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom'
import { useRef } from 'react'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet'

const Register = () => {
  
  const Navigate = useNavigate()
//************************** Start State **************************
    const [form,setForm] = useState({
      name: "",
      email: "",
      password: "",
    })
    const [err,setErr] = useState("")
    const [loading,setLoading] = useState(false)
    
//************************** Start Cookie **************************

const Cookies = Cookie()

//************************** Start Focus **************************

const Focus = useRef()
    useEffect(()=>{
      Focus.current.focus()
    },[])

//************************** Start Change **************************

function handleChange(e){
  setForm({...form,[e.target.name]: e.target.value})
}

//************************** Start Submit **************************

  async  function handleSubmit(e){
      e.preventDefault()
      setLoading(true)

      try{
      let res = await axios.post(`${baseURL}/${REGISTER}`,form)
        setLoading(false)

        const token = res.data.token
        Cookies.set("Ecommerce",token)
        Navigate('/' , {replace: true})
      }
      catch (err) {
        setLoading(false)
        if( err.response.status == 422 ){
          setErr("Email is already been taken ")
        }else{
          setErr("Internal server ERR ")
        }
      }
    }


  return (
  <>
  <Helmet>
      <meta charSet="utf-8" />
      <title>Sign Up</title>
  </Helmet>
  {loading && <Loading />}
    <div className='container'>
        <div className='row' style={{height: "100vh"}}>
          <Form className='form ' onSubmit={handleSubmit}>
            <div className='custom-form'>
              <h1>Register Now</h1>
              <Form.Group className="form-custom" id="exampleForm.ControlInput1">
                  <Form.Control ref={Focus} onChange={handleChange} name="name"  value={form.name} id='name' type='text' placeholder='Enter Your Name..'  required />
                  <Form.Label htmlFor='name'>Name:</Form.Label>
              </Form.Group>
              <Form.Group className="form-custom" id="exampleForm.ControlInput1">
                  <Form.Control onChange={handleChange} name="email"  value={form.email} id='email' type='email' placeholder='Enter Your Email..' required/>
                  <Form.Label htmlFor='email'>Email:</Form.Label>
              </Form.Group>
              <Form.Group className="form-custom" id="exampleForm.ControlInput1">
                  <Form.Control onChange={handleChange} name="password"  value={form.password} id='password' type='password' placeholder='Enter Your Password..' minLength='6' required/>
                  <Form.Label htmlFor='password'>Password:</Form.Label>
              </Form.Group>
              <button className='btn btn-primary'>Register</button>
              <Link to='/login'><button className='btn btn-primary'>Login</button></Link>
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

export default Register