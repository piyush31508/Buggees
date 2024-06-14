import React from 'react';
import bg1 from './stuff/vegburger.jpg';
import bg2 from './stuff/2patty.jpg';
import bg3 from './stuff/chicken.jpg';
import bg4 from './stuff/salsa.jpg';
import pt1 from './stuff/aalupetties.jpg';
import coke from './stuff/coke.jpg';
import cake from './stuff/cake.jpg';
import hotdog from './stuff/hotdog.jpg';
import sand from './stuff/aloosand.jpg';
import roll from './stuff/paneerroll.jpg';
import tikka from './stuff/paneertikka.jpg';

import Card from './card.js';

const Page = ({ addToCart }) => {
  const cardData = [
    { title: "Veg Burger", image: bg1, price: 49 },
    { title: "Chicken Burger", image: bg2, price: 59 },
    { title: "Fish Burger", image: bg3, price: 69 },
    { title: "Double patty Burger", image: bg4, price: 79 },
    { title: "Aaloo Masala Petties", image: pt1, price: 89 },
    { title: "Coke", image: coke, price: 99 },
    { title: "Cake", image: cake, price: 109 },
    { title: "Hot Dog", image: hotdog, price: 119 },
    { title: "Aloo Sandwich", image: sand, price: 129 },
    { title: "Paneer Roll", image: roll, price: 139 },
    { title: "Paneer Tikka", image: tikka, price: 149 },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cardData.map((item, index) => (
          <Card 
            key={index} 
            title={item.title} 
            image={item.image} 
            price={item.price} 
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
