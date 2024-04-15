function ProductCategoryRow({ category }) {
    
    return (
        <>
            <tr className="product-category-row">
                <th colSpan="2">
                    {category}
                </th>
            </tr>
        </>
    );
}

export default ProductCategoryRow
