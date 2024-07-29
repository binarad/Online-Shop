import { useParams } from 'react-router'
import Header from './Header'
import { useEffect, useState } from 'react'
import { ProductType } from '../HomePage'
import AddToCartButton from './AddToCartButton'
const ProductPage = () => {
	const [data, setData] = useState<ProductType[]>([])
	const [isAddedToCart, setIsAddedToCart] = useState<boolean>(false)
	const [cart, setCart] = useState<ProductType[]>([])

	// TODO: УЗНАТЬ У ПАШИ КАК ДОБАВИТЬ МАССИВ НА СТРАНИЦУ КОРЗИН
	const addToCart = (product: ProductType) => {
		setIsAddedToCart(true)
		if (isAddedToCart) {
			setCart([...cart, product])
			if (cart.length >= 1 && cart.length > 0) {
				setIsAddedToCart(false)
				console.log(`2 ${isAddedToCart}`)
			}
			console.log(cart)
		}
	}

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch('/items.json')
			const data = await response.json()
			setData(data)
		}

		fetchData()
	}, [])
	const params = useParams()
	return (
		<div className='w-full flex flex-col'>
			<Header />
			{data
				.filter(product => product.name === params.productId)
				.map((product: ProductType) => (
					<div className='flex m-2 p-3' key={product.name}>
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
								key={product.name}
								label='Add To Cart'
								onClick={() => addToCart(product)}
							/>
						</div>
					</div>
				))}
		</div>
	)
}

export default ProductPage
