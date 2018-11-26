import React from 'react';
import Dropdown from '../Dropdown';
import ProductViewType from './ProductViewType';

class WidgetControls extends React.Component {
  changeToListing = () => {
    this.props.changeToListingView();
  };
  changeToGrid = () => {
    this.props.changeToGridView();
  };
  render() {
    const listarray = [
      'Best Match',
      'Price + Shipping: lowest first',
      'Price + Shipping: highest first',
    ];
    return (
      <div className="w-control">
        <span className="sort-level">Sort By:</span>

        <Dropdown
          className="dropdown-menu-right"
          value="Best Match"
          optionsArray={listarray}
        />
        <ProductViewType
          changeToListing={this.changeToListing}
          changeToGrid={this.changeToGrid}
          active={this.props.active}
        />
      </div>
    );
  }
}

export default WidgetControls;
