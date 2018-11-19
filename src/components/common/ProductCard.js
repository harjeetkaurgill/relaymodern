import React from 'react';
import PropTypes from 'prop-types';
import Link from 'found/lib/Link';
import classnames from 'classnames';

class ProductCard extends React.Component {
  state = {
    isHover: false,
  };
  handleMouseHover = () => {
    console.log('in handle');
    this.setState(this.toggleHoverState);
  };
  toggleHoverState(state) {
    return { isHover: !state.isHover };
  }

  render() {
    const { imagesrc, title, price, linkvalue, className } = this.props;
    return (
      <div className={classnames('product-card', className)}>
        <div className="product-img">
          <img src={imagesrc} alt="product" />
        </div>
        <div className="product-body">
          <h3>{title}</h3>
          <p>{price}</p>
          <Link to="/">{linkvalue}</Link>
        </div>
      </div>
    );
  }
}

ProductCard.propTypes = {
  imagesrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  linkvalue: PropTypes.string,
  className: PropTypes.string,
};

export default ProductCard;
