import { useParams } from 'react-router'
import Header from './Header'
import { useEffect, useState } from 'react'
import { ProductType } from './HomePage'
import AddToCartButton from './AddToCartButton'
import { useCart } from './CartContext'

const ProductPage = () => {
	const { addToCart } = useCart()
	const [data, setData] = useState<ProductType[]>([])

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch('/items.json')
			const data = await response.json()
			setData(data)
		}

		fetchData()
	}, [])
	const params = useParams()
	const product = data.find(product => product.name === params.productId)

	if (!product) {
		return <div>Product not found</div>
	}

	return (
		<div className='w-full flex flex-col'>
			<Header />
			<div className='flex m-2 p-3'>
				<img
					src={product.imgUrl}
					alt='Product Image'
					className='w-[500px] h-[500px]'
				/>
				<div className='flex flex-col w-[400px] border-l p-2'>
					<h1 className='text-3xl font-semibold'>{product.name}</h1>
					<p className='text-base'>{product.description}</p>
					<p className='font-bold'>${product.price}</p>
					<p className='text-xs font-thin'>Quantity: {product.quantity}</p>
					<AddToCartButton
						label='Add To Cart'
						onClick={() => addToCart(product)}
					/>
				</div>
			</div>
		</div>
	)
}

export default ProductPage
