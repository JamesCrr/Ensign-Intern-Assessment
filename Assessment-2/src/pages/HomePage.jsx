import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HomeItemCard from "../components/HomeItemCard.jsx";

export default function HomePage() {
  const [items, setItems] = useState([]);

  const fetchData = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const jsonData = await res.json();

    setItems(jsonData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="">
      {items.map((item, index) => {
        return (
          <Link key={index} to={`item/${item.id}`} state={{ item }}>
            <HomeItemCard item={item} />
          </Link>
        );
      })}
    </div>
  );
}
