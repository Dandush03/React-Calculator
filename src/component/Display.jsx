import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Display extends Component {
  constructor(props) {
    super(props);
    const { result } = props;
    // eslint-disable-next-line react/no-unused-state
    this.state = { result };
  }

  render() {
    const { props: { result } } = this;
    return (
      <div className="display">
        <h2>{result}</h2>
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
