import React from 'react';
import List from '../../common/List';

const CategoriesList = props => (
  <div>
    <div className="aside-header">Shop Parts &amp; Accessories Categories</div>
    {props.ListData.map((value, i) => (
      <List
        key={i}
        listlabel={value.category}
        optionsArray={value.subcategoryList}
        className="category-list"
        accordion={true}
      />
    ))}
  </div>
);

export default CategoriesList;
