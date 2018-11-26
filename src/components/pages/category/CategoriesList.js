import React from 'react';
import List from '../../common/List';
import Link from 'found/lib/Link';

const CategoriesList = props => (
  <div>
    <div className="aside-header">Shop Parts &amp; Accessories Categories</div>
    {props.ListData.map((value, i) => (
      <List
        key={i}
        listlabel={value.heading}
        optionsArray={value.listarray}
        className="category-list"
      />
    ))}
    <div className="view-more-category-list">
      <Link to="/" className="view-more-cat-show-hide">
        View full list
      </Link>
    </div>
  </div>
);

export default CategoriesList;
