function ProductRow({ product }) {

    // check if product is in stock
    const name = product.stocked ? product.name :
        <span style={{ color: 'red' }}>
            {product.name}
        </span>;

    return (
        <>
            <tr className="product-row">
                <td className="product-row name">{name}</td>
                <td className="product-row price">{product.price}</td>
            </tr>
        </>
    );
}

export default ProductRow
