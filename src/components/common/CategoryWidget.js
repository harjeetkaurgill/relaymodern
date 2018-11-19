import React from 'react';
import PropTypes from 'prop-types';
import Link from 'found/lib/Link';
import classnames from 'classnames';

class CategoryWidget extends React.Component {
  state = {
    isHover: false,
  };
  handleMouseHover = () => {
    console.log('in handle');
    this.setState(this.toggleHoverState);
  };
  toggleHoverState(state) {
    return { isHover: !state.isHover };
  }

  render() {
    const { imagesrc, heading, hoverlistarray } = this.props;
    return (
      <div className="categoty-box">
        <div
          className={classnames('cb-inner', this.state.isHover ? 'open' : '')}
          onMouseEnter={this.handleMouseHover}
          onMouseLeave={this.handleMouseHover}
        >
          <img src={imagesrc} alt="categoryimage" />
          <p>{heading}</p>
          <ul>
            {hoverlistarray.map(name => (
              <li key={name}>
                <Link to="/">{name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

CategoryWidget.propTypes = {
  imagesrc: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  hoverlistarray: PropTypes.instanceOf(Array).isRequired,
};

export default CategoryWidget;
