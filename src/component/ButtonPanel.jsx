import React, { Component } from 'react';

import Button from './Button';

export default class ButtonPanel extends Component {
  constructor(props) {
    super(props);
    this.text = 0;
  }

  render() {
    return (
      <div className="group-container">
        <div className="group1">
          <Button name="reset" value="AC" color="none" />
          <Button name="plus-minus" value="+/-" color="none" />
          <Button name="percentage" value="%" color="none" />
          <Button name="divide" value="÷" />
        </div>
        <div className="group2">
          <Button name="7" value="7" color="none" />
          <Button name="8" value="8" color="none" />
          <Button name="9" value="9" color="none" />
          <Button name="multiply" value="X" />
        </div>
        <div className="group3">
          <Button name="4" value="4" color="none" />
          <Button name="5" value="5" color="none" />
          <Button name="6" value="6" color="none" />
          <Button name="subtract" value="-" />
        </div>
        <div className="group4">
          <Button name="1" value="1" color="none" />
          <Button name="2" value="2" color="none" />
          <Button name="3" value="3" color="none" />
          <Button name="add" value="+" />
        </div>
        <div className="group5">
          <Button name="0" value="0" wide color="none" />
          <Button name="point" value="." color="none" />
          <Button name="equal" value="=" />
        </div>
      </div>
    );
  }
}
