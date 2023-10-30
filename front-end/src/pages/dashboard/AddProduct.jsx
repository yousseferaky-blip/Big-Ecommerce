// import {  useState } from 'react'
// import {  PRODUCT } from '../../api/Api'
// import {Form} from 'react-bootstrap';
// import { Axios } from '../../api/Axios';
// import Loading from '../../loading/Loading';
// import { useNavigate } from 'react-router-dom';

// const AddProduct = () => {
//     const [form,setForm] = useState({
//         category:"",
//         title:"",
//         price:"",
//         description:"",
//         discount:"",
//         About:"",
//     })
//     const [images,setImages] = useState([])
//     const [loading , setLoading] = useState(false)
//     const Navi = useNavigate()
    
//     async function handleSubmit(e){
//         e.preventDefault()
//         setLoading(true)

//         try{
//             const data = new FormData()
//             data.append("category",form.category)
//             data.append("title",form.title)
//             data.append("price",form.price)
//             data.append("description",form.description)
//             data.append("discount",form.discount)
//             data.append("About",form.About)
//             for(let i=0 ;i<images.length ;i++){
//                 data.append("images[]",images[i])
//             }
//             let res = await Axios.post(`${PRODUCT}/add`, data )
//             window.location.pathname = '/dashboard/products'
//             }
//             catch (err) {
//                 setLoading(false)
//                 console.log(err);
//             }
//     }

//     const handleChange = (e) =>{
//         setForm({...form , [e.target.name] : e.target.value })
//     }

//     return (
//         <>
//             { loading && <Loading />}
//             <Form className='bg-white w-100 mx-2 p-3' onSubmit={handleSubmit}>
//                 <Form.Group className='mb-3' controlId='title'>
//                     <Form.Label >Title</Form.Label>
//                     <Form.Control name="title" value={form.title} onChange={handleChange} type="text"  required placeholder="Title..." />
//                 </Form.Group>

//                 <Form.Group className='mb-3' controlId='description'>
//                     <Form.Label >Description</Form.Label>
//                     <Form.Control name="description" value={form.description} onChange={handleChange} type="text"  required placeholder="Description..." />
//                 </Form.Group>

//                 <Form.Group className='mb-3' controlId='price'>
//                     <Form.Label >Price</Form.Label>
//                     <Form.Control name="price" value={form.price} onChange={handleChange} type="number"  required placeholder="Price..." />
//                 </Form.Group>

//                 <Form.Group className='mb-3' controlId='discount'>
//                     <Form.Label >Discount</Form.Label>
//                     <Form.Control name="discount" value={form.discount} onChange={handleChange} type="number"  required placeholder="Price..." />
//                 </Form.Group>

//                 <Form.Group className='mb-3' controlId='About'>
//                     <Form.Label >About</Form.Label>
//                     <Form.Control name="About" value={form.About} onChange={handleChange} type="text"  required placeholder="Price..." />
//                 </Form.Group>
                
//                 <Form.Group className='mb-3' controlId='exampleform.ControlInput4'>
//                     <Form.Label >Image</Form.Label>
//                     <Form.Control multiple  onChange={(e) =>setImages([...e.target.files])} type="file"   />
//                 </Form.Group>
            
                
//                 <button className='btn btn-primary'>Save</button>
//             </Form>
//         </>
//         );
// }


// export default AddProduct
