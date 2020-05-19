import '../stylesheet/app.scss';

import React from 'react';

import ButtonPanel from './ButtonPanel';
import Display from './Display';

function App() {
  return (
    <div className="calculator">
      <Display />
      <ButtonPanel />
    </div>
  );
}

export default App;
