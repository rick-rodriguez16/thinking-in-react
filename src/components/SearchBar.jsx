function SearchBar({ filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange }) {

    return (
        <>
            <form>
                <input 
                    type="text" 
                    name="search-bar"
                    value={filterText}
                    onChange={e => onFilterTextChange(e.target.value)}
                    placeholder="Search..."
                />
                <div>
                    <label>
                        <input 
                            type="checkbox" 
                            name="in-stock"
                            onChange={e => onInStockOnlyChange(e.target.checked)}
                            checked={inStockOnly}
                        /> 
                        {' '}
                        Only show products in stock
                    </label>
                </div>
            </form>
        </>
    );
}

export default SearchBar
