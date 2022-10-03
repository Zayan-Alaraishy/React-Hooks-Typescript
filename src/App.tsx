import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import "./index.css";
import Sidebar from "./Components/Sidebar";
import Products from "./Components/Products";

function App() {
  type Categories = string[];
  type SeletedCategory = string;
  const [categories, setCategories] = useState<Categories>([]);
  const [selectedCategory, setSelectedCategory] =
    useState<SeletedCategory>("all");
  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCategories(data);
      });
  }, []);
  if (categories.length <= 0) return <h1>Lodaing...</h1>;
  return (
    <main>
      <Sidebar
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <Products selectedCategory={selectedCategory} />
    </main>
  );
}

export default App;
