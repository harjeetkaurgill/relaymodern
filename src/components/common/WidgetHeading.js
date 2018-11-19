import React from 'react';
import PropTypes from 'prop-types';

const WidgetHeading = ({ label }) => (
  <div className="widget-header">{label}</div>
);

WidgetHeading.propTypes = {
  label: PropTypes.string.isRequired,
};

export default WidgetHeading;
