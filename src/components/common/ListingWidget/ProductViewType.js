import React from 'react';
import GridSvg from '../../common/Svg/GridSvg';
import ListSvg from '../../common/Svg/ListSvg';

const ProductViewType = props => (
  <div>
    <div className="result-type-anc result-type-thumb">
      <span
        onClick={props.changeToGrid}
        role="presentation"
        className={props.active ? '' : 'active'}
      >
        <GridSvg />
      </span>
    </div>
    <div className="result-type-anc result-type-list active">
      <span
        onClick={props.changeToListing}
        role="presentation"
        className={props.active ? ' list active' : 'list'}
      >
        <ListSvg />
      </span>
    </div>
  </div>
);

export default ProductViewType;
