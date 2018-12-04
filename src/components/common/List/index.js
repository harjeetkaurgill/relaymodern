import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Link from 'found/lib/Link';
import Accordion from '../Accordion';

const AccordionList = props => (
  <Accordion>
    <div className={classnames('list taps-accord', props.className)}>
      <h3>{props.listlabel}</h3>
      <ul>
        {props.optionsArray.slice(0, props.itemsToShow).map((name, i) => (
          <li key={i}>
            <Link to="/">{name.value}</Link>
          </li>
        ))}
      </ul>
    </div>
  </Accordion>
);

const SimpleList = props => (
  <div className={classnames('list', props.className)}>
    <h3>{props.listlabel}</h3>
    <ul>
      {props.optionsArray.slice(0, props.itemsToShow).map((name, i) => (
        <li key={i}>
          <Link to="/">{name.value}</Link>
        </li>
      ))}
    </ul>

    <button className="cat-show-hide" onClick={props.showMore}>
      {props.expanded ? <span>View less</span> : <span>View all</span>}
    </button>
  </div>
);

const CheckBoxList = props => (
  <div className={classnames('CheckBoxList', props.className)}>
    <h4>{props.listlabel}</h4>
    {props.optionsArray.slice(0, props.itemsToShow).map((name, i) => (
      <label className="checkbox-container" key={i}>
        {name}
        <input type="checkbox" />
        <span className="checkmark" />
      </label>
    ))}
  </div>
);

class List extends React.Component {
  state = {
    itemsToShow: 5,
    expanded: false,
  };
  showMore = () => {
    this.state.itemsToShow === 5
      ? this.setState({
          itemsToShow: this.props.optionsArray.length,
          expanded: true,
        })
      : this.setState({ itemsToShow: 5, expanded: false });
  };

  renderList(listlabel, optionsArray, className) {
    if (this.props.accordion) {
      return (
        <AccordionList
          optionsArray={optionsArray}
          listlabel={listlabel}
          className={className}
          itemsToShow={this.state.itemsToShow}
        />
      );
    } else if (this.props.checkList) {
      return (
        <CheckBoxList
          optionsArray={optionsArray}
          listlabel={listlabel}
          className={className}
        />
      );
    }
    return (
      <SimpleList
        optionsArray={optionsArray}
        listlabel={listlabel}
        className={className}
        itemsToShow={this.state.itemsToShow}
        showMore={this.showMore}
        expanded={this.state.expanded}
      />
    );
  }

  render() {
    const { listlabel, optionsArray, className } = this.props;
    return <div>{this.renderList(listlabel, optionsArray, className)}</div>;
  }
}

List.propTypes = {
  listlabel: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  accordion: PropTypes.bool,
  checkList: PropTypes.bool,
  optionsArray: PropTypes.instanceOf(Array).isRequired,
};

export default List;
