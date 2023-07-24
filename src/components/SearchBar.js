

function SearchBar({ setSearchTerm }) {
  return (
      <div>
        
        <p>Search Transactions</p>
          <input 
              type="text" 
              placeholder="Search transactions..." 
              onChange={(e) => setSearchTerm(e.target.value)} 
          />
      </div>
  );
}

export default SearchBar;