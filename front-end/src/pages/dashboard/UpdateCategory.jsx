import { useEffect, useState } from 'react'
import {  CATEGORY, USER } from '../../api/Api'
import {Form} from 'react-bootstrap';
import { Axios } from '../../api/Axios';
import Loading from '../../loading/Loading';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateCategory = () => {
    const [title , setTitle] = useState('')
    const [image , setImage] = useState('')
    const [loading , setLoading] = useState(false)
    const [disable , setDisable] = useState(true)
    const navi = useNavigate()

    // const id = Number(window.location.pathname.replace("/dashboard/categories/",""))
    const param = useParams()
    useEffect(()=>{
        Axios.get(`${CATEGORY}/${param.id}`).then(data=>{
            setTitle(data.data.title)
        })
        .then(()=>setDisable(false))
        .catch(()=>navi("/dashboard/categories/page/404",{ replace:true }))
    },[])

    async function handleSubmit(e){
        e.preventDefault()
        setLoading(true)

        const form = new FormData()
        form.append('title', title)
        form.append('image', image)

        try{
            let res = await Axios.post(`${CATEGORY}/edit/${param.id}`,form)
                window.location.pathname = '/dashboard/categories'
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
                    <Form.Label >Title</Form.Label>
                    <Form.Control value={title} onChange={(e) =>setTitle(e.target.value)} type="text"  required placeholder="Title..." />
                </Form.Group>

                <Form.Group className='mb-3' controlId='exampleform.ControlInput2'>
                    <Form.Label >Image</Form.Label>
                    <Form.Control  onChange={(e) =>setImage(e.target.files.item(0))} type="file"   />
                </Form.Group>
                <button disabled={disable} className='btn btn-primary'>Save</button>
            </Form>
        </>
        );
}

export default UpdateCategory