import Operate from './operate';

const Calculate = (data, buttonName) => {
  function isNumber(val) {
    return !!val.match(/[0-9]+/);
  }
  let total;
  let next;
  let operation;

  switch (buttonName) {
    case 'AC':
      total = null;
      next = null;
      operation = null;
      break;

    case '+/-':
      total = Operate(data.total, '-1', 'x');
      next = Operate(data.total, '-1', 'x');
      operation = '+/-';
      break;

    case '=':
      total = Operate(data.total, data.next, data.operation);
      next = '0';
      operation = null;
      break;

    default:

      if (!data.total) {
        total = '0';
        next = '';
      }

      if (isNumber(buttonName)) {
        if (data.next !== '0') {
          next += buttonName;
        } else {
          if (data.total !== '0' && !data.operation) {
            total = '0';
          }
          next = buttonName;
        }
      } else if (data.total === '0') {
        total = data.next;
        next = '0';
        operation = buttonName;
      } else {
        total = Operate(data.total, data.next, buttonName);
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
