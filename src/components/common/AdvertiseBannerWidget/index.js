import React from 'react';
import Link from 'found/lib/Link';
import PropTypes from 'prop-types';

const AdvertiseBannerWidget = ({ className, imagesrc }) => {
  return (
    <div className={className}>
      <Link to="/">
        <img src={imagesrc} alt="banner" />
      </Link>
    </div>
  );
};

AdvertiseBannerWidget.propTypes = {
  imagesrc: PropTypes.string.isRequired,

  className: PropTypes.string,
};
export default AdvertiseBannerWidget;
