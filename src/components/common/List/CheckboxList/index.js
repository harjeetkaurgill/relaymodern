import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Link from 'found/lib/Link';

const CheckList = ({ listlabel, optionsArray, className }) => (
  <div className={classnames('list', className)}>
    <h3>{listlabel}</h3>
    <ul>
      {optionsArray.map((name, i) => (
        <li key={i}>
          <Link to="/">{name}</Link>
        </li>
      ))}
    </ul>
  </div>


<div className="aside-categories">
    <h4>Brand</h4>
    <label className="checkbox-container">ValueLine
      <input type="checkbox"/>
      <span className="checkmark"></span>
    </label>

</div>
);

CheckList.propTypes = {
  listlabel: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  optionsArray: PropTypes.instanceOf(Array).isRequired,
};

export default CheckList;
