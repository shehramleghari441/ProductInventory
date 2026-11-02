
function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="search-section">
      <div className="search-heading">
        <h2>Search Products</h2>
        <p>Find products by name or category.</p>
      </div>

      <div className="search-input-wrapper">
        <span className="search-icon">🔍</span>

        <input
          type="text"
          placeholder="Search by product name or category..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />

        {searchTerm && (
          <button
            className="clear-search"
            onClick={() => onSearchChange("")}
            type="button"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
