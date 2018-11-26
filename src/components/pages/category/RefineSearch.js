import React from 'react';
import CheckboxList from '../../common/List';

const RefineSearch = props => (
  <div>
    <div className="aside-header">Refine By</div>
    {props.ListData.map((value, i) => (
      <CheckboxList
        key={i}
        listlabel={value.refineheading}
        optionsArray={value.refineArray}
        className="refine-list"
        checkList={true}
      />
    ))}
  </div>
);

export default RefineSearch;
