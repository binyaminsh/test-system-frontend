

const SearchBar = ({ data, setSearchResults }) => {
    
    const handleSearchChange = (e) => {
        if(!e.target.value) return setSearchResults(data);

        const results = data.filter((item) => item.tags.includes(e.target.value) || 
        item.content.includes(e.target.value)
        )

        setSearchResults(results);
    }
  return (
    <input 
    type="text"
     placeholder="search..."
     className="search-bar"
     onChange={handleSearchChange}
    />
  )
}

export default SearchBar