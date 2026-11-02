
import { useState } from "react";

function AddProductForm({ onAddProduct }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [image, setImage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name.trim() || !category.trim() || price === "" || quantity === "") {
      alert("Please fill in all fields.");
      return;
    }

    if (Number(price) <= 0 || Number(quantity) < 0) {
      alert("Enter a valid price and quantity.");
      return;
    }

    const imageUrl = image.trim();

    if (imageUrl && !/^https?:\/\//i.test(imageUrl)) {
      alert("Image link must start with http:// or https://");
      return;
    }

    const newProduct = {
      name: name.trim(),
      category: category.trim(),
      price: Number(price),
      quantity: Number(quantity),
      image: imageUrl
    };

    onAddProduct(newProduct);

    setName("");
    setCategory("");
    setPrice("");
    setQuantity("");
    setImage("");
  }

  return (
    <section className="form-section">
      <h2>Add New Product</h2>
      <p>Enter product details to add it to your inventory.</p>

      <form onSubmit={handleSubmit} className="product-form">
        <div className="form-group">
          <label>Product Name</label>
          <input
            type="text"
            placeholder="Enter product name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Category</label>
          <input
            type="text"
            placeholder="Enter category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Price ($)</label>
          <input
            type="number"
            placeholder="Enter price"
            min="0.01"
            step="0.01"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Quantity</label>
          <input
            type="number"
            placeholder="Enter quantity"
            min="0"
            step="1"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>

        <div className="form-group wide">
          <label>Image Link (optional)</label>
          <input
            type="url"
            placeholder="https://example.com/photo.jpg"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>

        <button type="submit" className="add-btn">
          + Add Product
        </button>
      </form>
    </section>
  );
}

export default AddProductForm;
