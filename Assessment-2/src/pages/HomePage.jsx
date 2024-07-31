import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HomeItemCard from "../components/HomeItemCard.jsx";

export default function HomePage() {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);

  const fetchData = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const jsonData = await res.json();

    setItems(jsonData);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-[101vh]">
          <p className="text-lg font-semibold text-gray-400">Loading...</p>
        </div>
      ) : (
        items.map((item, index) => {
          return (
            <Link key={index} to={`item/${item.id}`} state={{ item }}>
              <HomeItemCard item={item} />
            </Link>
          );
        })
      )}
    </>
  );
}
