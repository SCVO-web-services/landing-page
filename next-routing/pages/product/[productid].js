import {useRouter} from 'next/router'
function ProductDetail()
{
	const router = useRouter()
	const productId = router.query.productid
    return <h1> Details about Product {productId}</h1>
}
export default ProductDetail