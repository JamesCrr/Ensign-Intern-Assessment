import { useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import { CartContext } from "../App.jsx";
import OwnButton from "../components/OwnButton.jsx";

export default function ItemPage() {
  let link_state = useLocation();
  const { cart, addItemToCart } = useContext(CartContext);

  return (
    <div className="flex flex-col items-center justify-center">
      <img className="object-contain w-1/2 md:w-1/4" src={link_state.state.item.image} alt="Image of Item" />
      <div className="w-3/4 md:w-1/2 mt-5">
        <div>
          <h1 className="mr-2 inline-block text-lg font-bold">{link_state.state.item.title}</h1>
        </div>
        <span className="inline-block px-1 py-0.5 bg-zinc-300 rounded-md">{link_state.state.item.category}</span>
        <p>${link_state.state.item.price}</p>
        <p className="mt-5">{link_state.state.item.description}</p>
      </div>

      <div className="flex justify-center my-10">
        <OwnButton
          onClickFunc={() => {
            addItemToCart(link_state.state.item);
          }}
        >
          Add to Cart
        </OwnButton>
      </div>
    </div>
  );
}
