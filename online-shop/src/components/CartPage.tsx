import Header from './Header'
import { Link } from 'react-router-dom'
import { MdArrowBack } from 'react-icons/md'
import { useCart } from './CartContext'

export default function CartPage() {
	const { cart, removeFromCart, clearCart } = useCart()

	if (cart.length === 0) {
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

	const cartTotal = cart.reduce(
		(acc, current) => acc + current.price * current.quantity,
		0
	)
	console.log(cartTotal)
	return (
		<div className='w-full flex flex-col items-center '>
			<Header />
			<div className='flex flex-col p-4 w-[1200px] '>
				{cart.map(product => (
					<div //TODO: Add proper pruduct quantity and add image
						key={product.name}
						className='flex  items-center border py-2 px-4 my-2 h-20 rounded-lg border-[#D9D9D9]'
					>
						<div className='flex items-center w-[60px]'>
							<img src={product.imgUrl} />
						</div>
						<div className='m-3'>
							{/* TODO: Add "+" "-" buttons to regulate quantitiy  */}
							{product.name} - ${product.price} x {product.quantity}
						</div>
						<button
							onClick={() => removeFromCart(product.name ?? '')}
							className='text-red-500 hover:underline ml-auto'
						>
							Remove
						</button>
					</div>
				))}
				<div className='mt-4 flex flex-row justify-end'>
					<strong>Total: ${cartTotal.toFixed(2)}</strong>
				</div>
				<div className='flex flex-row justify-between'>
					<Link
						to='/'
						className='mt-4 bg-slate-500 w-1/5 text-white p-2 rounded-md hover:bg-slate-600 text-center'
					>
						<button>Continue Shopping</button>
					</Link>
					<button
						onClick={clearCart}
						className='mt-4 bg-red-500 text-white text-center p-2 rounded-md hover:bg-red-600 w-1/5 self-end'
					>
						Clear Cart
					</button>
				</div>
			</div>
		</div>
	)
}
