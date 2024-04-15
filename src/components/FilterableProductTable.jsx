import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

function FilterableProductTable({ products }) {

    return (
        <>
            <div className="filterable-product-table">
                <SearchBar />
                <ProductTable products={products} />
            </div>
        </>
    );
}

export default FilterableProductTable
