import React from 'react';
import List from '../../common/List';

const CategoriesList = props => (
  <div>
    <div className="aside-header">Shop Parts &amp; Accessories Categories</div>
    {props.ListData.map((value, i) => (
      <List
        key={i}
        listlabel={value.heading}
        optionsArray={value.listarray}
        className="category-list"
        accordion={true}
      />
    ))}
  </div>
);

export default CategoriesList;
