import React from 'react';



const UnOptimizedImage = () => {
  const images = Array.from({ length: 30 }, (_, index) => ({
    [`image${index + 1}`]: `../../assets/images/image${index + 1}.jpg`,
  }));
  console.log(images)
  return (
    <div className="grid grid-cols-3 gap-4">
      {Object.keys(images).map((imageName) => (
        <div key={imageName} className="aspect-w-1 aspect-h-1">
          <img src={images[imageName]} alt={`Image ${imageName}`} className="object-cover w-full h-full rounded-lg" />
        </div>
      ))}
    </div>
  );
};

export default UnOptimizedImage;
