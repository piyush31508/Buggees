// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './Bun/NavBar.js';
import Page from './Bun/page.js';
import Footer from './Bun/footer.js';
import { Cafe } from './Bun/cafe.js';
import { CartProvider } from './CartContext.js';

const cardData = [
  { title: "Veg Burger", image: "path/to/vegburger.jpg", price: 49 },
  { title: "Chicken Burger", image: "path/to/chickenburger.jpg", price: 59 },
  { title: "Fish Burger", image: "path/to/fishburger.jpg", price: 69 },
  { title: "Double patty Burger", image: "path/to/doublepattyburger.jpg", price: 79 },
  { title: "Aaloo Masala Petties", image: "path/to/aaloomasala.jpg", price: 89 },
  { title: "Coke", image: "path/to/coke.jpg", price: 99 },
  { title: "Cake", image: "path/to/cake.jpg", price: 109 },
  { title: "Hot Dog", image: "path/to/hotdog.jpg", price: 119 },
  { title: "Aloo Sandwich", image: "path/to/aloosandwich.jpg", price: 129 },
  { title: "Paneer Roll", image: "path/to/paneerroll.jpg", price: 139 },
  { title: "Paneer Tikka", image: "path/to/paneertikka.jpg", price: 149 },
];

const App = () => {
  return (
    <CartProvider>
      <div className="App">
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <Nav cardData={cardData}/>
                <Page />
                <Footer />
              </>
            } 
          />
          <Route 
            path="/cafe" 
            element={<Cafe />} 
          />
        </Routes>
      </div>
    </CartProvider>
  );
};

export default App;
