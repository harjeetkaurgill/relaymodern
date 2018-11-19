import React from 'react';
import ClickAwayListener from './ClickAwayListener';
import PropTypes from 'prop-types';

class FitmentInput extends React.Component {
  state = {
    open: false,
    metaopen: false,
    value: this.props.value,
  };
  handleToggle = () => {
    console.log('in handle');
    this.setState(state => ({ open: !state.open }));
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  choosetext = event => {
    console.log('this', event.target.innerHTML);
    this.props.onChange();
    this.setState({
      open: false,
      value: event.target.innerHTML,
      metaopen: true,
    });
  };
  render() {
    const { label, optionsArray } = this.props;
    const { open, value, metaopen } = this.state;
    const self = this;
    return (
      <div className="fitment-input">
        <div
          className="select-text"
          onClick={this.handleToggle}
          role="presentation"
        >
          <span
            className="meta"
            style={{ display: metaopen ? 'block' : 'none' }}
          >
            {label}
          </span>
          <span>{value}</span>
          <span className="right-arrow">&#9662;</span>
        </div>
        <ClickAwayListener onClickAway={this.handleClose}>
          <div
            className="dropdown"
            style={{ display: open ? 'block' : 'none' }}
          >
            <ul>
              {optionsArray.map(name => (
                <li key={name} onClick={self.choosetext} role="presentation">
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

FitmentInput.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  optionsArray: PropTypes.instanceOf(Array).isRequired,
  onChange: PropTypes.func,
};

export default FitmentInput;
