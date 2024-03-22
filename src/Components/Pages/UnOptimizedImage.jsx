import React, { useEffect, useState } from 'react';

const UnOptimizedImage = () => {
  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9000/images')
      .then(response => response.json())
      .then(data => setImageList([...data, ...data, ...data, ...data, ...data, ...data, ...data, ...data, ...data, ...data]))
      .catch(error => console.error('Error fetching image list:', error));
  }, []);

  return (
    <div className="container mx-auto px-4 my-4">
      <h1 className="text-center text-2xl font-bold py-4">UnOptimized Image Loading</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {imageList.map((imageName, index) => (
          <div key={index} className="aspect-w-1 aspect-h-1">
            <img
              src={`http://localhost:9000/images/${imageName}`}
              alt={`Image ${index + 1}`}
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UnOptimizedImage;
