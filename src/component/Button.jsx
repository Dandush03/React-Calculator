import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.name = props.name;
    this.value = props.value;
  }

  render() {
    return (
      <button type="button" name={this.name}>{this.value}</button>
    );
  }
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
