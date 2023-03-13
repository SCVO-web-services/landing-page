import Link from 'next/link'

function ProductList({productId = 100})
{
    return (
        <>
        <Link href="/">Home</Link>
            <h2>Product 1</h2>
            <h2>Product 2</h2>
            <h2>Product 3</h2>
            <h2><Link href={`/product/${productId}`}>Product {productId}</Link></h2>
        </>
    )
}
export default ProductList