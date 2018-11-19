import React from 'react';
import './widget.scss';
import Link from 'found/lib/Link';

const DiagramWidget = () => {
  return (
    <div className="diagramWidget">
      <div className="diagramWidget-content">
        <h2>Find Parts on a Diagram</h2>
        <p>Shop for car parts for models made from 1995 to today.</p>
        <Link to="/">Find Now</Link>
      </div>
    </div>
  );
};

export default DiagramWidget;
