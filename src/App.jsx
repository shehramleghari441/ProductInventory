
import { useState } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import AddProductForm from "./components/AddProductForm";
import SearchBar from "./components/SearchBar";
import "./App.css";

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", category: "Electronics", price: 850, quantity: 10 },
    { id: 2, name: "Mouse", category: "Accessories", price: 25, quantity: 50 },
    { id: 3, name: "Keyboard", category: "Accessories", price: 45, quantity: 20 },
    { id: 4, name: "Mobile", category: "Electronics", price: 600, quantity: 15 },
    { id: 5, name: "Monitor", category: "Electronics", price: 200, quantity: 8 }
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  function addProduct(newProduct) {
    setProducts([...products, {
      ...newProduct,
      id: Date.now()
    }]);
  }

  function deleteProduct(id) {
    setProducts(products.filter(product => product.id !== id));
  }

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <Navbar products={products} />

      <main className="container">
        <div className="welcome-section">
          <h2>Product Inventory</h2>
          <p>Manage your products and keep track of your inventory.</p>
        </div>

        <AddProductForm onAddProduct={addProduct} />

        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />

        <ProductList
          products={filteredProducts}
          onDeleteProduct={deleteProduct}
        />
      </main>

      <footer>
        <p>Product Inventory Dashboard | React.js Project</p>
      </footer>
    </div>
  );
}

export default App;
