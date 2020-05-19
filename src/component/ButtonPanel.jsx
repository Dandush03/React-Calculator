import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

const arr = ['x', '-', '+'];
let name = 9;

const Buttons = args => {
  const buttons = [];
  const group = name - 3;

  for (name; name > group; name -= 1) {
    buttons.push(
      <Button name={`${name}`} key={`group-${name}`} color="none" btnClick={args.btnClick.btnClick} />,
    );
  }
  return (
    buttons
  );
};

const Groups = args => {
  const groups = [];
  arr.forEach((arg, index) => {
    groups.push(
      <div className={`group-${index + 2}`} key={`group-${index + 2}`}>
        <Buttons btnClick={args} />
        <Button name={`${arg}`} btnClick={args.btnClick} />
      </div>,
    );
    name = 9;
  });
  return (
    <div className="group-container">
      <div className="group-1">
        <Button name="AC" color="none" btnClick={args.btnClick} />
        <Button name="+/-" color="none" btnClick={args.btnClick} />
        <Button name="%" color="none" btnClick={args.btnClick} />
        <Button name="÷" btnClick={args.btnClick} />
      </div>
      {groups}
      <div className="group5">
        <Button name="0" color="none" wide btnClick={args.btnClick} />
        <Button name="." color="none" btnClick={args.btnClick} />
        <Button name="=" btnClick={args.btnClick} />
      </div>
    </div>
  );
};

export default class ButtonPanel extends Component {
  constructor(props) {
    super(props);
    this.click = props.btnHandler;
  }

  btnClicker = arg => {
    this.click(arg);
  }

  render() {
    return (
      <Groups btnClick={this.btnClicker} />
    );
  }
}

ButtonPanel.propTypes = {
  btnHandler: PropTypes.func.isRequired,
};
