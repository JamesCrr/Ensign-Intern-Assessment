import { useState, useEffect, useContext } from "react";
import { CartContext } from "../App.jsx";
import CartItemCard from "../components/CartItemCard.jsx";

export default function CartPage() {
  const { cart, addItemToCart, removeItemToCart } = useContext(CartContext);
  const [totalPrice, setTotalPrice] = useState(0.0);

  useEffect(() => {
    let newtotal = 0;
    for (let itemId in cart) {
      newtotal += cart[itemId]["item"].price * cart[itemId]["count"];
    }
    setTotalPrice(newtotal.toFixed(2));
  }, [cart]);

  return (
    <>
      <div className="space-y-4">
        {Object.keys(cart).map((itemId, index) => {
          return (
            <CartItemCard
              key={index}
              item={cart[itemId]["item"]}
              itemCount={cart[itemId]["count"]}
              onAddCount={() => addItemToCart(cart[itemId]["item"])}
              onRemoveCount={() => {
                removeItemToCart(itemId);
              }}
            />
          );
        })}
      </div>

      {totalPrice !== "0.00" ? (
        <div className="mt-4 flex flex-col justify-end items-end">
          <h3 className="text-lg font-semibold">Total:</h3>
          <h2 className="text-lg font-bold">${totalPrice}</h2>
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <p className="text-lg font-semibold text-gray-400">Your Cart is empty!</p>
        </div>
      )}
    </>
  );
}
