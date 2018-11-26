import React from 'react';
import Link from 'found/lib/Link';
import StarSvg from '../../common/Svg/StarSvg';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import EllipsisText from 'react-ellipsis-text';

const ProductsBox = ({
  imgsrc,
  productTitle,
  brandName,
  partNumber,
  productDescription,
  productPrice,
  availability,
  reviewsCount,
  gridClass,
}) => (
  <div className={classnames('product-box bdr', gridClass)}>
    <div className="product-img">
      <div>
        <img src={imgsrc} alt="product" />
      </div>
    </div>
    <div className="product-content">
      <h2>
        <Link to="/" className="visible-desktop">
          <EllipsisText text={productTitle} length="68" />
        </Link>
        <Link to="/" className="visible-tab">
          <EllipsisText text={productTitle} length="30" />
        </Link>
        <Link to="/" className="visible-tab-small">
          <EllipsisText text={productTitle} length="25" />
        </Link>
      </h2>

      <p className="brand-part">
        by <strong>{brandName}</strong> <span>|</span> Part Number:
        <strong>{partNumber}</strong>
      </p>
      <p className="starRating">
        <span>
          <StarSvg />
        </span>
        <span>
          <StarSvg />
        </span>
        <span>
          <StarSvg />
        </span>
        <span>
          <StarSvg />
        </span>
        <span>
          <StarSvg />
        </span>
      </p>
      <div className="reviewsCount">{reviewsCount} Reviews</div>
      <div className="barmain">
        <span className="bar">|</span>
      </div>
      <div className="specific">Vehicle Specific</div>
      <p className="description-para">{productDescription}</p>
    </div>
    <div className="product-control">
      <p className="price">
        Price
        <span>{productPrice}</span>
      </p>
      <p className="price-grid">
        {productPrice}
        <span className="instock">{availability}</span>
      </p>
      <p>
        <Link to="/" className="button-red-solid addcartbutton">
          Add to cart
        </Link>
      </p>
      <p className="availability">
        Availability: <span className="instock">{availability}</span>
      </p>
    </div>
  </div>
);

ProductsBox.propTypes = {
  imgsrc: PropTypes.string.isRequired,
  productTitle: PropTypes.string.isRequired,
  brandName: PropTypes.string.isRequired,
  partNumber: PropTypes.string.isRequired,
  productDescription: PropTypes.string.isRequired,
  productPrice: PropTypes.string.isRequired,
  availability: PropTypes.string.isRequired,
  reviewsCount: PropTypes.string.isRequired,
  gridClass: PropTypes.string.isRequired,
};

export default ProductsBox;
