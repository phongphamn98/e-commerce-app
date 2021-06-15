import React, { useEffect, useState } from "react";
import Navbar from "./components/NavBar/Navbar";
import Products from "./components/Products/Products";
import { commerce } from "./lib/commerce";

const App = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await fetch(
      "https://api-kaito-shop.herokuapp.com/api/products/type?name=Puma&page=1&sort_price=0"
    );
    return response.json();
  };

  useEffect(() => {
    fetchProducts().then((res) => setProducts(res.data));
  }, []);

  return (
    <div>
      <Navbar />
      <Products products={products} />
    </div>
  );
};

export default App;
