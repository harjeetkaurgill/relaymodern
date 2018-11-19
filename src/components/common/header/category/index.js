import React from 'react';
import ClickAwayListener from '../../ClickAwayListener';
import Link from 'found/lib/Link';

class ShopByCategory extends React.Component {
  state = {
    open: false,
  };
  handleToggle = () => {
    console.log('in handle');
    this.setState(state => ({ open: !state.open }));
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  render() {
    const { open } = this.state;

    return (
      <div className="category">
        <div className="dropdown">
          <button className="button-outlined" onClick={this.handleToggle}>
            <span className="label_wrapper">
              <span className="lbl1">Shop by</span>
              <span className="lbl2">Category</span>
            </span>
          </button>
          <ClickAwayListener onClickAway={this.handleClose}>
            <div
              className="dropdown-menu"
              style={{ display: open ? 'flex' : 'none' }}
            >
              <div className="category-left">
                <ul>
                  <li>
                    <Link to="/">Accessories and Fluids</Link>
                  </li>
                  <li>
                    <Link to="/">Accessories and Fluids</Link>
                  </li>
                  <li>
                    <Link to="/">Accessories and Fluids</Link>
                  </li>
                  <li>
                    <Link to="/">Accessories and Fluids</Link>
                  </li>
                  <li>
                    <Link to="/">Accessories and Fluids</Link>
                  </li>
                  <li>
                    <Link to="/">Accessories and Fluids</Link>
                  </li>
                </ul>
              </div>
              <div className="category-center">
                <h2>Accessories and Fluids</h2>
                <div className="sub-cat-list-container">
                  <ul className="sub-cat-list">
                    <li>
                      <Link to="/">
                        Functional Fluid, Lubricant, Grease (including
                        Additives)
                      </Link>
                    </li>
                  </ul>
                  <ul className="sub-cat-list">
                    <li>
                      <Link to="/">Crankcase Ventilation System</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="category-right">
                <Link to="/" className="product-img">
                  <img src="/public/images/sub-cat.png" alt="" />
                </Link>
                <Link to="/" className="product-img">
                  <img src="/public/images/sub-cat.png" alt="" />
                </Link>
              </div>
            </div>
          </ClickAwayListener>
        </div>
      </div>
    );
  }
}

export default ShopByCategory;
