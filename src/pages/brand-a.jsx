import React, { useContext } from 'react';
import { Header } from '../components/header';
import { BrandaProducts } from '../products';
import { ShopContext } from '../context/shopcontext';

export const BrandA = () => {
  const { addToCart, removeFromCart, updateCartItemCount, cartItems } = useContext(ShopContext);

  const handleAddToCart = (id) => {
    addToCart(id);
  };

  const handleRemoveFromCart = (id) => {
    if (cartItems[id] > 0) {
      removeFromCart(id);
    }
  };

  const handleCartItemChange = (event, id) => {
    const newCartItemAmount = parseInt(event.target.value) || 0;
    const clampedValue = Math.max(newCartItemAmount, 0);
    updateCartItemCount(clampedValue, id); // Call the updateCartItemCount function
  };

  return (
    <div className='brand-a'>
      <Header slogan='Brand A' />
      <div className='container shop-a'>
        {BrandaProducts.map((product) => (
          <div className='card card-brand-a' key={product.id}>
            <p>{product.productName}</p>
            <img
              className='brand-bikes'
              src={product.productImage.src}
              alt={product.productImage.alt}
            />
            <div className='card-body'>
              <h1 className='pricetag-a'>{product.price}</h1>
              <div className='input-group mb-3'>
                <button
                  className='btn btn-outline-secondary'
                  type='button'
                  onClick={() => handleRemoveFromCart(product.id)}
                >
                  -
                </button>
                <input
                  type='text'
                  className='form-control'
                  value={cartItems[product.id] || 0}
                  onChange={(event) => handleCartItemChange(event, product.id)}
                />
                <button
                  className='btn btn-outline-secondary'
                  type='button'
                  onClick={() => handleAddToCart(product.id)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
