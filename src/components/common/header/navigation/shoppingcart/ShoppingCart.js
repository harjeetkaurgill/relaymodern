import React from 'react';
import CartDropDown from './cartdropdown';
import { createFragmentContainer, QueryRenderer, graphql } from 'react-relay';

const ShoppingCartQuery = graphql`
  query ShoppingCartQuery(
    $brand: String!
    $partType: String!
    $cart_id: String!
    $user_id: String!
    $sku_id: String!
    $quantity: String!
    $price: String!
    $operation: String!
    $title: String!
    $imageUrl: String!
    $core_deposit: String!
    $product_url: String!
    $fitmentuid: String!
    $distributor_group: String!
    $category: String!
  ) {
    store {
      outerCart(
        brand: $brand
        partType: $partType
        cart_id: $cart_id
        user_id: $user_id
        sku_id: $sku_id
        quantity: $quantity
        price: $price
        operation: $operation
        title: $title
        imageUrl: $imageUrl
        core_deposit: $core_deposit
        product_url: $product_url
        fitmentuid: $fitmentuid
        distributor_group: $distributor_group
        category: $category
      ) {
        id
        cart {
          id
          user_id
          cart_id
          cart_total
          core_deposit_total
          totalNumberOfItems
          cart_entry {
            title
            imageUrl
            price
            quantity
            sku_id
            core_deposit
            product_url
            fitmentuid
            distributor_group
            brand
            category
            partType
          }
        }
      }
    }
  }
`;

class ShoppingCart extends React.Component {
  state = {
    open: false,
  };
  handleToggle = () => {
    console.log('in handle');
    this.setState(state => ({ open: !state.open }));
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  render() {
    const { open } = this.state;
    const { cart, items, environment } = this.props;
    return (
      <li className="full-cart">
        <div className="wrap" onClick={this.handleToggle} role="presentation">
          <span className="nav-icon">
            <svg x="0px" y="0px" viewBox="0 0 323.99 282.77">
              <path
                fill="none"
                stroke="#000"
                strokeMiterlimit="7"
                strokeWidth="7px"
                d="M136.48,61.62h40.28a14,14,0,0,1,13.78,11.53L225.08,266a14,14,0,0,0,13.78,11.53H426.14l-188.07.08a14,14,0,0,1-13.78-11.5l-5.15-33.83H424.48a14,14,0,0,0,13.83-11.85l17-109.34a14,14,0,0,0-13.83-16.15H229.81"
                transform="translate(-136.48 -56.62)"
              />
              {items.length > 0 ? (
                <circle fill="#3d5b99" cx="186.19" cy="107.57" r="30" />
              ) : null}

              <circle
                fill="none"
                stroke="#000"
                strokeMiterlimit="7"
                strokeWidth="7px"
                cx="286.39"
                cy="253.87"
                r="23.5"
              />
              <circle
                fill="none"
                stroke="#000"
                strokeMiterlimit="7"
                strokeWidth="7px"
                cx="107.86"
                cy="254.27"
                r="23.5"
              />
            </svg>
          </span>
          <span className="meta">{items}</span>
        </div>
        <CartDropDown
          handleClose={this.handleClose}
          environment={environment}
          cart={cart}
          open={open}
        />
      </li>
    );
  }
}

const Cart = parentprops => (
  <QueryRenderer
    environment={parentprops.environment}
    query={ShoppingCartQuery}
    variables={{
      brand: '',
      partType: 'wheel',
      cart_id: '40d7b87c-6570-48f0-ad4b-f7a7c0a5a2ad',
      user_id: '3a0b42b5-bca7-4e34-9754-be909795aad4',
      sku_id: '1',
      quantity: '1',
      price: '1',
      operation: 'GETCART',
      title: 'title',
      imageUrl: 'imageUrl',
      core_deposit: '30',
      product_url: 'test',
      fitmentuid: '30',
      distributor_group: 'lkq',
      category: 'category',
    }}
    render={({ error, props }) => {
      const emptyCart = [];
      console.log(props);
      if (error) {
        return <div>{error.message}</div>;
      } else if (props) {
        return (
          <ShoppingCart
            items={props.store.outerCart.cart.totalNumberOfItems}
            cart={props.store.outerCart.cart.cart_entry}
            environment={parentprops.environment}
          />
        );
      }
      return (
        <ShoppingCart
          cart={emptyCart}
          items={0}
          environment={parentprops.environment}
        />
      );
    }}
  />
);

const CartContainer = props => <Cart environment={props.relay.environment} />;

export default createFragmentContainer(CartContainer, {
  store: graphql`
    fragment ShoppingCart_store on Store {
      idQuery
    }
  `,
});
