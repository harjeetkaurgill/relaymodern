import React from 'react';
import Link from 'found/lib/Link';
import './breadcrumbs.scss';
import HomeSvg from '../Svg/HomeSvg';

const Breadcrumbs = () => (
  <div className="breadcrumbs">
    <ul>
      <li className="breadcrumbsvg">
        <Link to="/">
          <HomeSvg />
        </Link>
      </li>
      <li>
        <span className="angle-right">​&#8250;</span>
      </li>
      <li>
        <Link to="/category">Categories</Link>
      </li>
      <li>
        <span className="angle-right">​&#8250;</span>
      </li>
      <li>
        <Link to="/category">Emission Control</Link>
      </li>
      <li>
        <span className="angle-right">​&#8250;</span>
      </li>
      <li>
        <span>Sensors</span>
      </li>
    </ul>
  </div>
);

export default Breadcrumbs;
