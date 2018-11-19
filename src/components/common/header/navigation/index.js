import React from 'react';
import ShoppingCart from './shoppingcart/ShoppingCart';
import Chat from './chat';
import TrackOrder from './trackorder';
import Help from './help';

const Navigation = () => (
  <div className="cart-buttons">
    <div className="buttons-list">
      <ul>
        <ShoppingCart />
        <Chat />
        <TrackOrder />
        <Help />
      </ul>
    </div>
  </div>
);

export default Navigation;
