import React from 'react';
import './widget.scss';
import { withAppContext } from '../../../HOCS';

const DiagramWidget = props => {
  return (
    <div className="diagramWidget">
      <div className="diagramWidget-content">
        <h2>Find Parts on a Diagram</h2>
        <p>Shop for car parts for models made from 1995 to today.</p>
        <button onClick={props.context.onOpenSidePopup}>Find Now</button>
      </div>
    </div>
  );
};

export default withAppContext(DiagramWidget);
