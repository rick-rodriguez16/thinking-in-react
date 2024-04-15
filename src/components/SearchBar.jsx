function SearchBar() {

    return (
        <>
            <form>
                <input type="text" name="search-bar" placeholder="Search..."/>
                <div>
                    <label>
                        <input type="checkbox" name="in-stock" value="inStock" /> 
                        {' '}
                        Only show products in stock
                    </label>
                </div>
            </form>
        </>
    );
}

export default SearchBar
