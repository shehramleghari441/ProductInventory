
import ProductCard from "./ProductCard";

function ProductList({ products, onDeleteProduct }) {
  return (
    <section className="product-section">
      <div className="section-heading">
        <div>
          <h2>All Products</h2>
          <p>Manage your product inventory</p>
        </div>

        <span className="product-count">
          {products.length} Products
        </span>
      </div>

      {products.length > 0 ? (
        <div className="product-grid">
          {products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onDeleteProduct={onDeleteProduct}
            />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <span>📦</span>
          <h3>No products found</h3>
          <p>Try another search or add a new product.</p>
        </div>
      )}
    </section>
  );
}

export default ProductList;
