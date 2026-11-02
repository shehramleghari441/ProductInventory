import { useState } from "react";

const LOW_STOCK_LIMIT = 10;

function getStockStatus(quantity) {
  const units = Number(quantity);

  if (units <= 0) return { label: "Out of Stock", className: "out-of-stock" };
  if (units < LOW_STOCK_LIMIT) return { label: "Low Stock", className: "low-stock" };
  return { label: "In Stock", className: "in-stock" };
}

function ProductCard({ product, onDeleteProduct }) {
  const [imageFailed, setImageFailed] = useState(false);
  const status = getStockStatus(product.quantity);
  const showImage = product.image && !imageFailed;

  return (
    <div className="product-card">
      <div className="product-image">
        {showImage ? (
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            onError={() => setImageFailed(true)}
          />
        ) : (
          <div className="image-placeholder" aria-hidden="true">
            {product.name.charAt(0).toUpperCase()}
          </div>
        )}

        <span className={`stock-status ${status.className}`}>
          {status.label}
        </span>
      </div>

      <div className="product-body">
        <div className="product-details">
          <h3>{product.name}</h3>
          <span className="category-badge">
            {product.category}
          </span>
        </div>

        <div className="product-info">
          <div className="price">
            <span>Price</span>
            <strong>${Number(product.price).toFixed(2)}</strong>
          </div>

          <div>
            <span>Quantity</span>
            <strong>{product.quantity} units</strong>
          </div>
        </div>

        <button
          className="delete-btn"
          onClick={() => onDeleteProduct(product.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
