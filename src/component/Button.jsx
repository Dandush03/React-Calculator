import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.name = props.name;
  }

  render() {
    return (
      <button type="button">{this.name}</button>
    );
  }
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
};
