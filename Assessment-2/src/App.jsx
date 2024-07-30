import { useState, createContext } from "react";
import { Outlet, Link } from "react-router-dom";
import cartlogo from "/cart.png";
import "./App.css";

export const CartContext = createContext(null);

function App() {
  const [cart, setCart] = useState({});
  const [totalItemsInCart, setTotalItemsInCart] = useState(0);

  const addItemToCart = (newitem) => {
    let newCart = { ...cart };
    // Store item and increment count
    const newcount = newitem.id in newCart ? newCart[newitem.id]["count"] + 1 : 1;
    newCart[newitem.id] = { item: newitem, count: newcount };
    // Update cart
    setCart(newCart);
    setTotalItemsInCart((prevCount) => prevCount + 1);
  };

  const removeItemToCart = (itemId) => {
    if (!(itemId in cart)) {
      return;
    }

    let newCart = { ...cart };
    // Decrement count, remove item when == 0
    newCart[itemId]["count"] -= 1;
    if (newCart[itemId]["count"] == 0) delete newCart[itemId];
    // Update cart
    setCart(newCart);
    setTotalItemsInCart((prevCount) => prevCount - 1);
  };

  return (
    <>
      <div className="fixed top-0 py-4 w-screen bg-amber-50">
        <div className="flex justify-between items-center mx-10 md:mx-16">
          <Link to={`/`}>
            <h1 className="text-xl font-bold underline">Assessment 2</h1>
          </Link>
          <Link to={`cart`} className="flex justify-center items-center relative">
            <img className="w-6" src={cartlogo} />
            {totalItemsInCart > 0 && (
              <span className="absolute top-0 left-3 inline-flex items-center py-0.5 px-1.5 rounded-full text-xs font-medium bg-red-500 text-white">
                {totalItemsInCart}
              </span>
            )}
          </Link>
        </div>
      </div>

      <CartContext.Provider value={{ cart, addItemToCart, removeItemToCart }}>
        <div id="detail" className="m-4 mt-24 md:m-14 md:mt-24">
          <Outlet />
        </div>
      </CartContext.Provider>
    </>
  );
}

export default App;
