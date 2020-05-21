// eslint-disable-next-line import/extensions
import Big from 'big.js';

const Operate = (a, b, op) => {
  const tempA = Big(a);
  const tempB = Big(b);
  let result;
  switch (op) {
    case '+': return tempA.plus(tempB).toString();
    case '-': return tempA.minus(tempB).toString();
    case 'x': return tempA.times(tempB).toString();
    case '÷': return tempA.div(tempB).toString();
    case '%':
      result = Big(tempA.div(100).toString());
      if (tempB !== 0) {
        result = result.times(tempB).toString();
      }
      return result;
    default: return 'ERROR';
  }
};

export default Operate;
