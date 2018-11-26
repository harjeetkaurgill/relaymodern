import React from 'react';

class Accordion extends React.Component {
  componentDidMount() {
    this.handleClick();
  }

  handleClick = () => {
    const acc = this.acc.children;
    for (let i = 0; i < acc.length; i++) {
      const a = acc[i];
      a.onclick = () => a.classList.toggle('active');
    }
  };

  render() {
    const self = this;
    return (
      <div
        ref={a => (self.acc = a)}
        onClick={self.handleClick}
        role="presentation"
      >
        {this.props.children}
      </div>
    );
  }
}

export default Accordion;
