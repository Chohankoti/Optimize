import React from 'react';
import { FixedSizeList as List } from 'react-window';

const Row = ({ index, style }) => (
    <div style={style} className="flex items-center justify-center">
      Row {index}
    </div>
  );
  

export default function ListItems() {
  const items = Array.from({ length: 100 }, (_, index) => index);

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 flex flex-wrap">
        <div className="w-full md:w-1/2 overflow-auto border-r">
          <h1 className="text-center text-2xl font-bold py-4">UnOptimized</h1>
          {items.map((item, index) => (
            <Row className="items-center" key={index} index={item} />
          ))}
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-start items-center mt-5">
          <h1 className="text-center text-2xl font-bold">Optimized with Items of Ten Lakhs</h1>
          <List
            height={575}
            itemCount={1000000}
            itemSize={35}
            width={'100%'}
          >
            {Row}
          </List>
        </div>
      </div>
    </div>
  );
}
