import React, { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    num1: '',
    num2: '',
    operation: 'sum'
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform calculation based on selected operation
    let result;
    switch (formData.operation) {
      case 'sum':
        result = parseFloat(formData.num1) + parseFloat(formData.num2);
        break;
      case 'subtract':
        result = parseFloat(formData.num1) - parseFloat(formData.num2);
        break;
      case 'multiply':
        result = parseFloat(formData.num1) * parseFloat(formData.num2);
        break;
      case 'divide':
        result = parseFloat(formData.num1) / parseFloat(formData.num2);
        break;
      default:
        result = NaN;
    }
    alert(`Result: ${result}`);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="flex flex-col items-center bg-gray-100 p-8 rounded-lg shadow-md">
        <input
          type="number"
          name="num1"
          value={formData.num1}
          onChange={handleChange}
          placeholder="Enter first number"
          className="mb-4 p-2 border rounded-md focus:outline-none focus:border-blue-500"
          required
        />
        <input
          type="number"
          name="num2"
          value={formData.num2}
          onChange={handleChange}
          placeholder="Enter second number"
          className="mb-4 p-2 border rounded-md focus:outline-none focus:border-blue-500"
          required
        />
        <select
          name="operation"
          value={formData.operation}
          onChange={handleChange}
          className="mb-4 p-2 border rounded-md focus:outline-none focus:border-blue-500"
        >
          <option value="sum">Sum</option>
          <option value="subtract">Subtract</option>
          <option value="multiply">Multiply</option>
          <option value="divide">Divide</option>
        </select>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none">
          Submit
        </button>
      </form>
    </div>
  );
}
