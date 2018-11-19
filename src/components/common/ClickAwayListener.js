import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * Component that alerts if you click outside of it
 */
export default class ClickAwayListener extends Component {
  constructor(props) {
    super(props);

    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.onClickAway = this.onClickAway.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.onClickAway);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.onClickAway);
  }

  /**
   * Alert if clicked on outside of element
   */
  onClickAway(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.props.onClickAway();
    }
  }

  /**
   * Set the wrapper ref
   */
  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  render() {
    return <div ref={this.setWrapperRef}>{this.props.children}</div>;
  }
}

ClickAwayListener.propTypes = {
  children: PropTypes.element.isRequired,
};
