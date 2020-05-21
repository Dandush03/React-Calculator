import Operate from './operate';

const Calculate = (data, buttonName) => {
  function isNumber(val) {
    return !!val.match(/[0-9]+/);
  }
  let { total } = data;
  let { next } = data;
  let { operation } = data;

  switch (buttonName) {
    case 'AC':
      total = null;
      next = null;
      operation = null;
      break;

    case '.':
      next += buttonName;
      break;

    case '+/-':
      total = Operate(data.total, '-1', 'x');
      next = Operate(data.total, '-1', 'x');
      operation = '+/-';
      break;

    case '=':
      if (data.next !== null && data.next !== '0' && data.total !== '0') {
        total = Operate(data.total, data.next, data.operation);
        next = null;
        operation = null;
      }
      break;

    default:

      if (!data.next) {
        total = null;
        next = '';
      }

      if (isNumber(buttonName)) {
        if (data.next !== '0') {
          next += buttonName;
        } else {
          if (!data.total && !data.operation) {
            total = null;
          }
          next = buttonName;
        }
      } else if (!data.total) {
        total = data.next;
        next = '0';
        operation = buttonName;
      } else if (!next && !operation) {
        // eslint-disable-next-line prefer-destructuring
        total = data.total;
        next = '0';
        operation = buttonName;
      } else {
        total = Operate(total, next, buttonName);
        next = '0';
        operation = buttonName;
      }
  }

  return {
    total,
    next,
    operation,
  };
};

export default Calculate;
