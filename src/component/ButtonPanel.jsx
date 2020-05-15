import React, { Component } from 'react';

import Button from './Button';

export default class ButtonPanel extends Component {
  constructor(props) {
    super(props);
    this.text = 0;
  }

  render() {
    return (
      <div>
        <div className="group1">
          <Button name="reset" value="AC" />
          <Button name="plus-minus" value="+/-" />
          <Button name="percentage" value="%" />
          <Button name="divide" value="÷" />
        </div>
        <div className="group2">
          <Button name="7" value="7" />
          <Button name="8" value="8" />
          <Button name="9" value="9" />
          <Button name="multiply" value="X" />
        </div>
        <div className="group3">
          <Button name="4" value="4" />
          <Button name="5" value="5" />
          <Button name="6" value="6" />
          <Button name="subtract" value="-" />
        </div>
        <div className="group4">
          <Button name="1" value="1" />
          <Button name="2" value="2" />
          <Button name="3" value="3" />
          <Button name="add" value="+" />
        </div>
        <div className="group5">
          <Button name="0" value="0" />
          <Button name="coma" value="," />
          <Button name="point" value="." />
          <Button name="equal" value="=" />
        </div>
      </div>
    );
  }
}
