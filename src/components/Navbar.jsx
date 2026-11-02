
function Navbar({ products }) {
  const totalProducts = products.length;

  const totalCategories = [
    ...new Set(products.map(product => product.category))
  ].length;

  const totalStock = products.reduce(
    (total, product) => total + Number(product.quantity),
    0
  );

  return (
    <header className="navbar">
      <div className="navbar-content">
        <div className="logo">
          <span className="logo-icon">📦</span>
          <div>
            <h1>StockFlow</h1>
            <p>Inventory Management</p>
          </div>
        </div>

        <div className="navbar-stats">
          <div className="nav-stat">
            <strong>{totalProducts}</strong>
            <span>Products</span>
          </div>

          <div className="nav-stat">
            <strong>{totalCategories}</strong>
            <span>Categories</span>
          </div>

          <div className="nav-stat">
            <strong>{totalStock}</strong>
            <span>Total Stock</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
