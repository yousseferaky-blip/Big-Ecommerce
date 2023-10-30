import { useEffect, useState } from 'react'
import {  USER } from '../../api/Api'
import {Form} from 'react-bootstrap';
import { Axios } from '../../api/Axios';
import Loading from '../../loading/Loading';
import { useNavigate } from 'react-router-dom';
import { faBedPulse } from '@fortawesome/free-solid-svg-icons';

const UpdateUser = () => {
    const [name , setName] = useState('')
    const [email , setEmail] = useState('')
    const [role,setRole] = useState("")
    const [loading , setLoading] = useState(false)
    const [disable , setDisable] = useState(true)
    const navi = useNavigate()

    const id = Number(window.location.pathname.replace("/dashboard/users/",""))
    
    useEffect(()=>{
        Axios.get(`${USER}/${id}`).then(data=>{
            setName(data.data.name)
            setEmail(data.data.email)
            setRole(data.data.role)
        })
        .then(()=>setDisable(false))
        .catch(()=>navi("/dashboard/users/page/404",{ replace:true }))
    },[])

    async function handleSubmit(e){
        e.preventDefault()
        setLoading(true)
        try{
            let res = await Axios.post(`${USER}/edit/${id}`,{
                name:name,
                email:email,
                role:role
            })
                window.location.pathname = '/dashboard/users'
            }
            catch (err) {
                setLoading(false)
                console.log(err);
            }
    }
    return (
        <>
            { loading && <Loading />}
            <Form className='bg-white w-100 mx-2 p-3' onSubmit={handleSubmit}>
                <Form.Group className='mb-3' controlId='exampleform.ControlInput1'>
                    <Form.Label >UserName</Form.Label>
                    <Form.Control value={name} onChange={(e) =>setName(e.target.value)} type="text"  required placeholder="name..." />
                </Form.Group>
            <br />
                <Form.Group  className='mb-3' controlId='exampleform.ControlInput2'>
                    <Form.Label >Email</Form.Label>
                    <Form.Control value={email} onChange={(e) =>setEmail(e.target.value)} type="email" required placeholder="email..." />
                </Form.Group>
            <br />
                <Form.Group  className='mb-3' controlId='exampleform.ControlInput3'>
                    <Form.Label >Role</Form.Label>
                    <Form.Select value={role} onChange={(e) =>setRole(e.target.value)}>
                        <option disabled value="">Select Role</option>
                        <option value="1995">Admin</option>
                        <option value="2001">User</option>
                        <option value="1996">Writer</option>
                        
                    </Form.Select>
                </Form.Group>
                <button disabled={disable} className='btn btn-primary'>Save</button>
            </Form>
        </>
        );
}

export default UpdateUser