import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Display extends Component {
  constructor(props) {
    super(props);
    this.result = props.result;
  }

  render() {
    return (
      <div className="display">
        <h2>{this.result}</h2>
      </div>
    );
  }
}

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
};
