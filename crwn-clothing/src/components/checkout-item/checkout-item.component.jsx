import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import './checkout-item.styles.scss';

const CheckoutItem = ({ item }) => {
  const { name, quantity, price, imageUrl } = item;
  const { addItemToCart, removeItemFromCart, clearItemFromCart } = useContext(CartContext);

  const clearItemHandler = () => clearItemFromCart(item);
  const removeItemHandler = () => removeItemFromCart(item);
  const addItemHandler = () => addItemToCart(item);

  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={ imageUrl } alt={ `${ name }`} /> 
      </div>
      <span className='name'>
        { name }
      </span>
      <span className='quantity'>
        <span className='arrow' onClick={ removeItemHandler }>❮</span>
        <span className='value'>{ quantity }</span>
        <span className='arrow' onClick={ addItemHandler }>❯</span>
      </span>
      <span className='price'>
        { price }
      </span>
      <div className='remove-button' onClick={ clearItemHandler }>
        &#10005;
      </div>
    </div>
  )
}

export default CheckoutItem;