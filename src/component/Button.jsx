import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.name = props.name;
    this.wide = props.wide;

    if (props.wide) {
      this.width = '50%';
    }

    if (props.color) {
      this.color = props.color;
    }

    this.style = {
      width: this.width,
      backgroundColor: this.color,
    };
  }

  click() {
    const { props: { btnClick } } = this;
    btnClick(this.name);
  }

  render() {
    return (
      <button type="button" style={this.style} onClick={() => this.click(this)}>{this.name}</button>
    );
  }
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  wide: PropTypes.bool,
  color: PropTypes.string,
  btnClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  wide: false,
  color: 'orange',
};
