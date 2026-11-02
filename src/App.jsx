
import { useState } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import AddProductForm from "./components/AddProductForm";
import SearchBar from "./components/SearchBar";
import "./App.css";

// Free stock photos from Unsplash (credited in the footer)
const photo = (id) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=640&h=480&q=70`;

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", category: "Electronics", price: 850, quantity: 10, image: photo("1736576660096-744a1dae8e03") },
    { id: 2, name: "Mouse", category: "Accessories", price: 25, quantity: 50, image: photo("1723310181223-ae4945216c2e") },
    { id: 3, name: "Keyboard", category: "Accessories", price: 45, quantity: 20, image: photo("1720315631164-d1a79b743f59") },
    { id: 4, name: "Mobile", category: "Electronics", price: 600, quantity: 15, image: photo("1628581885470-49a5d56a92af") },
    { id: 5, name: "Monitor", category: "Electronics", price: 200, quantity: 8, image: photo("1583169856505-c3d543045878") }
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
        <p className="photo-credit">
          Photos by{" "}
          <a href="https://unsplash.com/@pparnxoxo" target="_blank" rel="noreferrer">pparnxoxo</a>,{" "}
          <a href="https://unsplash.com/@zelebb" target="_blank" rel="noreferrer">Andrey Matveev</a>,{" "}
          <a href="https://unsplash.com/@niknullify" target="_blank" rel="noreferrer">Nik Layug</a>,{" "}
          <a href="https://unsplash.com/@r0x4n20" target="_blank" rel="noreferrer">Rohit Morwani</a> and{" "}
          <a href="https://unsplash.com/@asafinam" target="_blank" rel="noreferrer">Arina Safina</a>{" "}
          on <a href="https://unsplash.com" target="_blank" rel="noreferrer">Unsplash</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
