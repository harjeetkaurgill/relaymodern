import React from 'react';
import Link from 'found/lib/Link';
import PropTypes from 'prop-types';
import './CategoryCard.scss';

const CategoryCard = ({ categoryImage, categoryName, subcategoryArray }) => (
  <div className="sub-category-box">
    <div className="sc-image">
      <img src={categoryImage} alt="category" />
      <Link to="/subcategory" className="button-blue-line small">
        View All
      </Link>
    </div>
    <div className="sc-content">
      <h2>{categoryName}</h2>

      <ul>
        {subcategoryArray.map((subcategory, i) => (
          <li key={i}>
            <Link to="/listing">{subcategory}</Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
);
CategoryCard.propTypes = {
  categoryImage: PropTypes.string.isRequired,
  categoryName: PropTypes.string.isRequired,
  subcategoryArray: PropTypes.instanceOf(Array).isRequired,
};

export default CategoryCard;
