// Cal.jsx
import React from 'react';

const Cal = ({ formData }) => {
  const { num1, num2, operation } = formData;
 
  let result;
  switch (operation) {
    case 'sum':
      result = parseFloat(num1) + parseFloat(num2);
      break;
    case 'subtract':
      result = parseFloat(num1) - parseFloat(num2);
      break;
    case 'multiply':
      result = parseFloat(num1) * parseFloat(num2);
      break;
    case 'divide':
      result = parseFloat(num1) / parseFloat(num2);
      break;
    default:
      result = NaN;
  }

  console.log(result);

  return result.toString(); // Return the result as a string
};

export default Cal;
