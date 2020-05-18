import React from 'react';

import Button from './Button';

const arr = ['X', '-', '+'];
let name = 9;

const Buttons = () => {
  const buttons = [];
  const group = name - 3;

  for (name; name > group; name -= 1) {
    buttons.push(
      <Button name={`${name}`} key={`group-${name}`} color="none" />,
    );
  }
  return (
    buttons
  );
};

const Groups = () => {
  const groups = [];
  arr.forEach((arg, index) => {
    groups.push(
      <div className={`group-${index + 2}`} key={`group-${index + 2}`}>
        <Buttons />
        <Button name={`${arg}`} />
      </div>,
    );
  });
  return (
    <div className="group-container">
      <div className="group-1">
        <Button name="AC" color="none" />
        <Button name="+/-" color="none" />
        <Button name="%" color="none" />
        <Button name="÷" />
      </div>
      {groups}
      <div className="group5">
        <Button name="0" color="none" wide />
        <Button name="." color="none" />
        <Button name="=" />
      </div>
    </div>
  );
};

function ButtonPanel() {
  return (
    <Groups />
  );
}

export default ButtonPanel;
