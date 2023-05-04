'use client';

import { useState } from 'react';
import Image from 'next/image'; // Image 최적화 => image를 무조건 import 해서 넣어줘야함
import TomatoImg from '/public/food0.png';
import PastaImg from '/public/food1.png';
import CoconutImg from '/public/food2.png';

export default function List() {
  let product = [
    { name: '토마토', price: '$100', src: TomatoImg },
    { name: '파스타', price: '$10', src: PastaImg },
    { name: '코코넛', price: '$200', src: CoconutImg },
  ];

  const [quantities, setQuantities] = useState([0, 0, 0]);

  const handleMinus = (index) => {
    if (quantities[index] > 0) {
      const newQuantities = [...quantities];
      newQuantities[index] -= 1;
      setQuantities(newQuantities);
    }
  };

  const handlePlus = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index] += 1;
    setQuantities(newQuantities);
  };

  return (
    <main>
      <h2 className='title'>상품목록</h2>
      {product.map((item, index) => (
        <div className='food' key={index}>
          <Image className='food-img' src={item.src} alt={item.name} />
          {/* 
            src에 직접 url을 넣어주는 경우 next.config.js에서 주석으로 된 설정을 추가해야함
            추가로 width와 height 값을 넣어줘야함
            ex. <Image className='food-img' src='https://www.example.com/asdfqwerasdf' alt={item.name} width={200} height={200} />
          */}
          <h3>
            {item.name} <span>{item.price}</span>
          </h3>
          <div className='quantity-control'>
            <button onClick={() => handleMinus(index)} type='button' className='minusBtn'>
              -
            </button>
            <span className='item-quantity'>{quantities[index]}</span>
            <button onClick={() => handlePlus(index)} type='button' className='plusBtn'>
              +
            </button>
          </div>
        </div>
      ))}
    </main>
  );
}
