import React from 'react';
import ClickAwayListener from './ClickAwayListener';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class Dropdown extends React.Component {
  state = {
    open: false,
    value: this.props.value,
    activeItem: 0,
  };
  handleToggle = () => {
    console.log('in handle');
    this.setState(state => ({ open: !state.open }));
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  choosetext = (name, index) => {
    this.setState({
      open: false,
      value: name,
      activeItem: index,
    });
  };
  render() {
    const { optionsArray, className } = this.props;
    const { open, value, activeItem } = this.state;
    const self = this;
    return (
      <div className={classnames('dropdown-widget', className)}>
        <div
          className="default-text"
          onClick={this.handleToggle}
          role="presentation"
        >
          <span className="selected-value">{value}</span>
          <span className="right-arrow">&#9662;</span>
        </div>
        <ClickAwayListener onClickAway={this.handleClose}>
          <div
            className="dropdown-menu"
            style={{ display: open ? 'block' : 'none' }}
          >
            <ul>
              {optionsArray.map((name, i) => (
                <li
                  className={activeItem === i ? 'active' : ''}
                  key={i}
                  onClick={() => self.choosetext(name, i)}
                  role="presentation"
                >
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </ClickAwayListener>
      </div>
    );
  }
}

Dropdown.propTypes = {
  value: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  optionsArray: PropTypes.instanceOf(Array).isRequired,
};

export default Dropdown;
