import '../stylesheet/app.scss';

import React, { Component } from 'react';

import ButtonPanel from './ButtonPanel';
import Display from './Display';
import Calculate from '../logic/calculate';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  btnClick = arg => {
    const { state } = this;
    this.setState(Calculate(state, arg));
    console.log(state);
  }

  render() {
    const { next, total } = this.state;
    return (
      <div className="calculator">
        <Display />
        <ButtonPanel btnHandler={this.btnClick} />
      </div>
    );
  }
}
