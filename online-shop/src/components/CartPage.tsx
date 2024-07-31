import Header from './Header'
import { Link } from 'react-router-dom'
import { MdArrowBack } from 'react-icons/md'
import { ProductType } from './HomePage'
import { useState } from 'react'

export default function CartPage() {
	const [cart, setCart] = useState<ProductType[]>([])

	// if (
	// 	isAddedToCart &&
	// 	product !== null &&
	// 	product !== undefined &&
	// 	product.length > 0
	// ) {
	// 	setCart(product)
	// 	console.log(cart)
	// }

	if (cart.length <= 0) {
		console.log(cart.length)
		return (
			<div className='w-full flex flex-col '>
				<Header />
				<div className='flex flex-col items-center justify-center m-10'>
					<span className='text-3xl font-bold'>Your cart is empty</span>
					<Link
						to={'/'}
						className='flex items-center hover:cursor-pointer bg-slate-500 text-white rounded-md p-2 mt-4 w-40 h-10 justify-center hover:bg-slate-600'
					>
						<MdArrowBack />
						<span>Back to Home</span>
					</Link>
				</div>
			</div>
		)
	}

	const cartTotal = cart.reduce((acc, current) => acc + current.price, 0)

	return (
		<div className='w-full flex flex-col '>
			<Header />
			<div>
				{cart.map(product => (
					<div key={product.name}>
						{product.name} - {product.price}
					</div>
				))}
			</div>
		</div>
	)
}
