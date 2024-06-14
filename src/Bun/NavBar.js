import React, { useState , useContext} from 'react';
import { Navbar, Nav as ReactNav, Form, FormControl, Button, Dropdown, DropdownButton } from 'react-bootstrap';
import { FaUser, FaHeart, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext.js';

import logo from './stuff/logo.jpg';
import back from './stuff/back.jpg';
import back2 from './stuff/back2.jpg';
import back3 from './stuff/back3.jpg';
import './style.css';

const Nav = ({cardData}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showLikes, setShowLikes] = useState(false);

  const {likedItems, cart, totalAmount } = useContext(CartContext);

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    const results = cardData.filter(card => card.title.toLowerCase().includes(query.toLowerCase()));
    setSearchResults(results);
  };

  return (
    <>
      <Navbar bg="light" expand="lg" className="relative z-10">
        <Navbar.Brand as={Link} to="/" className="mx-auto">
          <img src={logo} className="h-16" alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <ReactNav className="mx-auto">
            <ReactNav.Link as={Link} to="/">Home</ReactNav.Link>
            <ReactNav.Link as={Link} to="/menu">Menu</ReactNav.Link>
            <ReactNav.Link as={Link} to="/about">About Us</ReactNav.Link>
            <ReactNav.Link as={Link} to="/cafe">Cafe</ReactNav.Link>
          </ReactNav>
          <div className="relative">
            <Form className="hidden lg:flex me-1">
              <FormControl
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchQuery}
                onChange={handleSearchChange}
                className="border border-gray-300 rounded px-1 py-1"
              />
            </Form>
            {searchQuery && (
              <div className="absolute w-full bg-white shadow-md mt-1 rounded">
                {searchResults.length > 0 ? (
                  searchResults.map((result, index) => (
                    <div key={index} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      <Button className='serach-btn'>{result.title}</Button>
                    </div>
                  ))
                ) : (
                  <div className="px-4 py-2">No results found</div>
                )}
              </div>
            )}
          </div>
          <ReactNav className="me-5">
            <DropdownButton align="end" title={<FaUser />} id="user-dropdown">
              <Dropdown.Item>Sign Up</Dropdown.Item>
              <Dropdown.Item>Log In</Dropdown.Item>
              <Dropdown.Item>Order History</Dropdown.Item>
            </DropdownButton>
            <Dropdown show={showLikes} onToggle={() => setShowLikes(!showLikes)} align="end">
              <Dropdown.Toggle as={Button} variant="link">
                <FaHeart />
              </Dropdown.Toggle>
              <Dropdown.Menu className='dropmenu'>
                {likedItems.length > 0 ? (
                  likedItems.map((item, index) => (
                    <div key={index} className="flex items-center px-4 py-2">
                      <img src={item.image} alt={item.title} className="w-20 h-15 mr-1" />
                      <div>
                        <h5>{item.title}</h5>
                        <p>@{item.price}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="px-4 py-2">No liked items</div>
                )}
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown align="end">
              <Dropdown.Toggle as={Button} variant="link">
                <FaShoppingCart />
              </Dropdown.Toggle>
              <Dropdown.Menu className='dropmenu'>
                {cart.length > 0 ? (
                  cart.map((item, index) => (
                    <React.Fragment key={index}>
                      <div className="flex items-center px-4 py-2">
                        <img src={item.image} alt={item.title} className="w-20 h-15 mr-1" />
                        <h5>{item.title}</h5>
                        <hr />
                        <div className='flex'>
                          <p>@{item.price}</p>
                          <p>*{item.count}</p>
                        </div>
                      </div>
                    </React.Fragment>
                  ))
                ) : (
                  <div className="px-4 py-2">No items in cart</div>
                )}
                <hr />
                <div className="flex items-center justify-center px-4 py-2">
                  <button className='bg-blue-700 text-white justify-center px-6 py-1 mr-3 rounded'>Buy Now</button>
                  <span className='text-blue'>@{totalAmount}</span>
                </div>
              </Dropdown.Menu>
            </Dropdown>
          </ReactNav>
        </Navbar.Collapse>
        <Form className="lg:hidden me-auto">
          <FormControl type="search" placeholder="Search" aria-label="Search" value={searchQuery} onChange={handleSearchChange} className="border border-gray-300 rounded px-2 py-1" />
        </Form>
      </Navbar>
      <div id="carouselExampleCaptions" className="relative carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={back} className="block w-full max-h-128 object-cover" alt="..." />
            <div className="carousel-caption hidden md:block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={back2} className="block w-full max-h-128 object-cover" alt="..." />
            <div className="carousel-caption hidden md:block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={back3} className="block w-full max-h-128 object-cover" alt="..." />
            <div className="carousel-caption hidden md:block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </button>
      </div>
    </>
  );
};

export default Nav;