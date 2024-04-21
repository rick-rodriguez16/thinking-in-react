function SearchBar({ filterText, inStockOnly }) {

    return (
        <>
            <form>
                <input 
                    type="text" 
                    name="search-bar"
                    value={filterText}
                    placeholder="Search..."
                />
                <div>
                    <label>
                        <input 
                            type="checkbox" 
                            name="in-stock"
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
