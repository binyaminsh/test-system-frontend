const SearchBar = ({ data, setSearchResults, properties }) => {
  const handleSearchChange = (e) => {
    const results = data.filter((item) => {
      for (const p of properties) {
        if (typeof item[p] === typeof []) {
          return item[p].some((t) => t.includes(e.target.value.trim()));
        } else {
          return item[p].includes(e.target.value.trim());
        }
      }
      return item;
    });
    setSearchResults(results);
  };
  return (
    <input
      type="text"
      placeholder="search..."
      className="search-bar"
      onChange={handleSearchChange}
    />
  );
};

export default SearchBar;
