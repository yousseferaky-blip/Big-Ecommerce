import React, { useEffect, useState } from 'react'
import './Product.css'
import Navbar from '../home/Navbar'
import Footer from '../footer/Footer'
import { useTranslation } from 'react-i18next';
import Setting from '../../../setting/Setting';
import { Helmet } from 'react-helmet';

const Cart = ({cart,DeleteProduct}) => {
    const [t, i18n] = useTranslation()
    const [CART , SETCART] = useState(cart)

    useEffect(()=>{
        SETCART(cart)
    },[cart])

    return (
<>
<Helmet>
    <meta charSet="utf-8" />
    <title>Cart</title>
</Helmet>
<Navbar/ >
<Setting />
  <div className='Cart-Container'>
    {
        CART.length > 0 ?
    
    <>
    {
            CART.map((item,index) => {
                return (
                    <div key={index} className="cart-item">
                        <div className="cart-item-img">
                        {item.images.map((image) => {
                    return (<img className='IMAGE' src={image.image} alt={image.alt} />);
              })}
                        </div>
                        <div className="cart-item-info">
                                <h4>{item.title}</h4>
                                <h4 className='cart-item-info-Price'>{item.price}$</h4>
                                <button onClick={()=>DeleteProduct(item.id)}>{t('remove')}</button>
                        </div>
                        <div className="cart-item-Count">
                            <button onClick={()=>{
                                const Minus = CART.map((itm,indx)=>{
                                    return index == indx ? {...itm, quantity: item.quantity > 1 ? item.quantity-1: 1}: itm
                                })
                                SETCART(Minus)
                            }}>-</button>
                            <h3>{item.quantity}</h3>
                            <button onClick={()=>{
                                const Plus = CART.map((itm,indx)=>{
                                    return index == indx? {...itm, quantity: item.quantity + 1}:itm
                                })
                                SETCART(Plus)
                            }}>+</button>
                        </div>
                        <h2>{t('total')}: <span>{ item.price * item.quantity}$</span></h2>
                    </div>
                )
            })}
    </>
       : <p className='Noproducts'>{t('noproduct')}</p> 
        }
    <div className='Total'>
        <p>{t('totals')}</p>
        <h1>
            {CART.reduce((acc,item)=>{
                return acc + item.price * item.quantity
            },0)}$
        </h1>
    </div>
    </div> 
  <Footer />
    </>  )
}

export default Cart