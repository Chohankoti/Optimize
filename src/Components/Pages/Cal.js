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

    return result;
};

export default Cal;
