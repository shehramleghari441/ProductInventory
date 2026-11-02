
function ProductCard({ product, onDeleteProduct }) {
  return (
    <div className="product-card">
      <div className="product-icon">
        📦
      </div>

      <div className="product-details">
        <h3>{product.name}</h3>
        <span className="category-badge">
          {product.category}
        </span>
      </div>

      <div className="product-info">
        <div>
          <span>Price</span>
          <strong>${Number(product.price).toFixed(2)}</strong>
        </div>

        <div>
          <span>Quantity</span>
          <strong>{product.quantity} units</strong>
        </div>
      </div>

      <div className="stock-status">
        {product.quantity > 0 ? "In Stock" : "Out of Stock"}
      </div>

      <button
        className="delete-btn"
        onClick={() => onDeleteProduct(product.id)}
      >
        Delete
      </button>
    </div>
  );
}

export default ProductCard;
