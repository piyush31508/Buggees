// Card.js
import React, { useState, useContext } from 'react';
import { FaHeart } from 'react-icons/fa';
import like from './stuff/like.png';
import { CartContext } from '../CartContext.js';

const Card = ({ title, image, price }) => {
  const [count, setCount] = useState(1);
  const [showHide, setShowHide] = useState(false);
  const [liked, setLiked] = useState(false);
  
  const { addToCart, handleLikeClick } = useContext(CartContext);

  const show = () => {
    setShowHide(!showHide);
  };

  const inc = () => {
    setCount(prevCount => prevCount + 1);
  };

  const dec = () => {
    if (count > 0) {
      setCount(prevCount => prevCount - 1);
    }
  };

  const send = () => {
    const itemData = {
      title: title,
      image: image,
      price: price
    };
    setLiked(!liked);
    handleLikeClick(itemData);
  };
  
  const cart = () => {
    const toBuy = {
      title: title,
      image: image,
      price: price,
      count: count
    }; 
    addToCart(toBuy);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} className="w-full h-48 object-cover" alt={title} />
      <div className="p-4">
        <div className="flex justify-between items-center">
          <h5 className="text-xl font-semibold">{title}</h5>
          <button onClick={send}>
            {liked ? <FaHeart className="text-red-500" /> : <img src={like} className="w-5 h-5" alt="Like" />}
          </button>
        </div>
        <p className="mt-2 text-gray-600">Starting at @{price}/-</p>
        <div className={`${showHide ? 'hidden' : 'block'}`}>
          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded" onClick={show}>Add to Cart</button>
        </div>
        <div className={`flex items-center mt-4 ${showHide ? 'flex' : 'hidden'}`}>
          <button className="bg-green-500 text-white py-1 px-3 rounded" onClick={dec}>-</button>
          <h5 className="mx-2 ">{count}</h5>
          <button className="bg-green-500 text-white py-1 px-3 rounded" onClick={inc}>+</button>
          <button className="bg-blue-700 text-white ml-6 py-1 px-3 rounded but" onClick={cart}>Buy</button>
        </div>
      </div>
    </div>
  );
};

export default Card;