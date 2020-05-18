import React from 'react';

import Button from './Button';

const arr = ['X', '-', '+'];
let name = 9;

const Buttons = () => {
  const buttons = [];
  const group = name - 3;

  for (name; name > group; name -= 1) {
    buttons.push(
      <Button name={`${name}`} key={`group-${name}`} />,
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
    <div>
      <div className="group-1">
        <Button name="AC" />
        <Button name="+/-" />
        <Button name="%" />
        <Button name="÷" />
      </div>
      {groups}
      <div className="group5">
        <Button name="0" />
        <Button name="," />
        <Button name="." />
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
