import MainLogo from '../assets/main-logo-black-transparent.png'
import CartLogo from '../assets/bxs-cart.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react'
const Header = () => {
	const [productQuantity, setProductQuantity] = useState<number>(0)
	return (
		<div className='flex h-[65px] w-full flex-row justify-center items-center px-[16px] border-b border-[#D9D9D9] bg-[#FFFFFF] gap-6 box-border flex-none order-none self-stretch flex-grow-1'>
			<Link
				to='/'
				className='w-[40px] h-[40px] flex flex-row items-center flex-none order-none grow-0 mr-auto'
			>
				<img src={MainLogo} className='h-full w-full' />
			</Link>

			<input
				className='w-[600px] h-[35px] rounded-md border border-[#D9D9D9] p-2'
				type='text'
				placeholder='Search your product'
			/>
			<Link
				to='/cartPage'
				className='ml-auto w-[40px] h-[40px] relative flex justify-center items-center'
			>
				<button className=''>
					<img src={CartLogo} className='w-8 z-0' />
					<span className='absolute top-[-10px] right-[-10px] bg-slate-600 text-white h-6 w-6 rounded-full flex items-center justify-center text-sm'>
						{productQuantity}
					</span>
				</button>
			</Link>
		</div>
	)
}

export default Header
