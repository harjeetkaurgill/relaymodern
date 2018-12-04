import React from 'react';
import Link from 'found/lib/Link';
import PropTypes from 'prop-types';
import './CategoryCard.scss';

const CategoryCard = ({
  categoryImage,
  categoryName,
  subcategoryArray,
  ListData,
}) => (
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
        {subcategoryArray.map((subcategory, i) => {
          const path = `/listing/${ListData.year}/${encodeURIComponent(
            ListData.make.trim(),
          )}/${encodeURIComponent(ListData.model.trim())}/${encodeURIComponent(
            ListData.submodel.trim(),
          )}/${encodeURIComponent(
            ListData.engine.trim(),
          )}/${encodeURIComponent(
            subcategory.key.trim(),
          )}/${encodeURIComponent(categoryName.trim())}/${encodeURIComponent(
            subcategory.value.trim(),
          )}`;
          return (
            <li key={i}>
              <Link to={path}>{subcategory.value}</Link>
            </li>
          );
        })}
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
