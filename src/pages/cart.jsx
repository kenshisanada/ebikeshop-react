import React, { useContext } from 'react'
import {BrandaProducts} from '../products'
import {BrandbProducts} from '../products'
import {BrandcProducts} from '../products'
import { ShopContext } from '../context/shopcontext'
import {CartItem} from './cart-item'
import {useNavigate} from 'react-router-dom'

export const Cart = () => {
    const {cartItems, getTotalCartAmount} = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();
    const navigate = useNavigate();

    let allProducts = [...BrandaProducts, ...BrandbProducts, ...BrandcProducts];

  return (
    <div className='cart'>
        <div>
            <h1>Your cart items</h1>
        </div>
        <div className='cartItems'>
            {allProducts.map((product) => {
                if(cartItems[product.id] && cartItems[product.id]  > 0) {
                    return <CartItem key={product.id} data= {product} />;
                }
                return null;
            })}
            
        </div>
{totalAmount > 0 ? (
        <div className='checkout'>
            
            <p>Subtotal: ${totalAmount}</p>
            <button onClick={() => navigate("/")}>Continue Shopping</button>
            <button>Checkout</button>
        </div>
): (
    <h1>Your Cart is Empty</h1>
)}
    </div>
  );
};
