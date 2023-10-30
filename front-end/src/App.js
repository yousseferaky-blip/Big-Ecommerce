import { Routes , Route } from 'react-router-dom';
import Home from './pages/website/home/Home';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import User from './pages/dashboard/User';
import Dashboard from './pages/dashboard/Dashboard';
import RequireAuth from './pages/auth/RequireAuth';
import UpdateUser from './pages/dashboard/UpdateUser';
import AddUser from './pages/dashboard/AddUser';
import Writer from './pages/dashboard/Writer';
import Error404 from './pages/auth/Error404';
import Categories from './pages/dashboard/Categories';
import AddCategory from './pages/dashboard/AddCategory';
import UpdateCategory from './pages/dashboard/UpdateCategory';
import About from './pages/website/about/About';
import Product from './pages/dashboard/Product';
import Cart from './pages/website/product/Cart';
import Swal from 'sweetalert2';
import { useState , useEffect } from 'react';
import Products from './pages/website/product/Products';
import ProductDetails from './pages/website/product/ProductDetails';

const Storge =  localStorage.getItem('Cart') ? 
    JSON.parse(localStorage.getItem('Cart')) : []

function App() {
  const [cart,setCart] = useState(Storge)
// ADD PRODUCT
  const AddProduct  = (Product) =>{
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'تم اضافه المنتج بنجاح',
      showConfirmButton: false,
      timer: 1500
    })
      const Find = cart.find(item => item.id === Product.id)
      if(Find){
        setCart(cart.map(item => item.id === Product.id? {...Find, quantity : Find.quantity + 1} : item))
      }else{
        setCart([...cart , { ...Product , quantity : 1 }])
      }
  } 
// DELETE PRODUCT
 const DeleteProduct = (id) =>{
    Swal.fire({
      title: 'متاكد من انك عاوز تمسح المنتج?',
      text: "لا يمكن ان ترجع في هذا!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'نعم اريد!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'اتمسح!',
          ' لقد تم حذف هذا النتج.',
          'success'
        )
         const Delete = cart.filter(item=>item.id !== id)
         setCart(Delete)
      }
    })
  }
  useEffect(()=>{
    localStorage.setItem('Cart',JSON.stringify(cart))
  },[cart])
  
  return (
    <div className="App">
      <Routes>
        {/* HOME AND PRODUCT */}
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About />}/>
        <Route path='/products' element={<Products AddProduct={AddProduct}/>}/>
        <Route path='/cart' element={<Cart cart={cart} DeleteProduct={DeleteProduct} />}/>
        <Route path='/:id' element={<ProductDetails />}/>
        {/* AUTH */}
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
        <Route path='/*' element={<Error404 />}/>
        {/* DASHBOARD */}
        <Route element={<RequireAuth allowedRole={['1995','1996','1999']}/>}>
          <Route path='/dashboard' element={<Dashboard />} >
            <Route element={<RequireAuth allowedRole={['1995']}/>}>
              <Route path='users' element={<User />}/>
              <Route path='users/:id' element={<UpdateUser />}/>
              <Route path='user/add' element={<AddUser />}/>
            </Route>
            <Route element={<RequireAuth allowedRole={['1999','1995']}/>}>
            {/* CATEGORY */}
              <Route path='categories' element={<Categories />}/>
              <Route path='categories/:id' element={<UpdateCategory />}/>
              {/* <Route path='category/add' element={<AddCategory />}/> */}
            {/* PRODUCT */}
              <Route path='products' element={<Product />}/>
              <Route path='product/add' element={<AddCategory />}/>
            </Route>
            <Route element={<RequireAuth allowedRole={['1996','1995']}/>}>
             <Route path='writer' element={<Writer />}/>
            </Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
