import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./login/Register";
import Header from "./header/Header";
import Login from "./login/Login";
import { createContext } from "react";
import Books from "./books/Books";
import Cart from "./cart/Cart";
import Order from "./orders/Order";

export const AppContext = createContext();
function App() {
  const [user, setUser] = useState();
  const [cart, setCart] = useState([]);
  return (
    <AppContext.Provider
      value={{ user: user, setUser: setUser, cart: cart, setCart: setCart }}
    >
      <div className="App">
        <Router>
          <div>
            <Header />
            <div className="main">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/order/:id" element={<Order />} />
                <Route path="*" element={<Home />} />
              </Routes>
            </div>
          </div>
        </Router>
      </div>
    </AppContext.Provider>
  );
}

function Home() {
  return <Books />;
}

export default App;
