import React from "react";
import "./App.css";
// import Categories from "./components/categories";
import Products from "./components/products";

function App() {
  // const [selectedCategory, setSelectedCategory] = useState(null);
  // function handleSelectCategory(e) {
  //   const selectedCategory = e.target.textContent;
  //   setSelectedCategory(selectedCategory);
  // }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Products</h1>
        {/* <Categories handleSelectCategory={handleSelectCategory} /> */}
        <Products />
      </header>
    </div>
  );
}

export default App;
