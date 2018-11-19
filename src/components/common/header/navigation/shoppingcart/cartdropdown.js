import React from 'react';
import ClickAwayListener from '../../../ClickAwayListener';
import Link from 'found/lib/Link';
import RemoveFromCartMutation from '../../../../../mutations/RemoveFromCartMutation';

class ShoppingCartDropdown extends React.Component {
  handleItemRemove = item => {
    const data = {
      cart_id: '40d7b87c-6570-48f0-ad4b-f7a7c0a5a2ad',
      user_id: '3a0b42b5-bca7-4e34-9754-be909795aad4',
      sku_id: item.sku_id,
      brand: item.brand,
      quantity: item.quantity.toString(),
      title: item.title,
      price: item.price.toString(),
      imageUrl: item.imageUrl,
      core_deposit: item.core_deposit.toString(),
      operation: 'REMOVESKUFROMCART',
      product_url: item.product_url,
      fitmentuid: item.fitmentuid,
      distributor_group: item.distributor_group,
      category: item.category,
      partType: item.partType,
    };
    RemoveFromCartMutation.commit(this.props.environment, data);
  };

  render() {
    const { cart } = this.props;

    return (
      <ClickAwayListener onClickAway={this.props.handleClose}>
        <div
          className="dropdown-menu"
          style={{ display: this.props.open ? 'block' : 'none' }}
        >
          <div className="items-list">
            {cart.map((item, index) => (
              <div className="item-row" key={index}>
                <div className="item-image">
                  <img src={item.imageUrl} alt="item1" />
                </div>
                <div className="item-content">
                  <Link to="/">{item.title}</Link>
                  <span className="item-price">${item.price}</span>
                  <span className="item-qty">Qty: {item.quantity}</span>
                  <button
                    className="item-remove button-outlined"
                    onClick={this.handleItemRemove.bind(this, item)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="list-buttons">
            <Link to="/" className="button-blue-line">
              View Cart
            </Link>
            <Link to="/" className="button-red-solid">
              Checkout
            </Link>
          </div>
        </div>
      </ClickAwayListener>
    );
  }
}

export default ShoppingCartDropdown;
