import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.name = props.name;
    this.value = props.value;
    this.wide = props.wide;
    /* this.color = props.color; */

    if (props.wide) {
      this.width = '50%';
    }

    if (props.color) {
      this.color = props.color;
    }

    this.style = {
      width: this.width,
      'background-color': this.color,
    };
  }

  render() {
    return (
      <button type="button" style={this.style}>{this.name}</button>
    );
  }
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  wide: PropTypes.bool,
  color: PropTypes.string,
};

Button.defaultProps = {
  wide: false,
  color: 'orange',
};
