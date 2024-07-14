import Header from './Header'

export default function CartPage() {
	return (
		<div className='w-full flex justify-center items-center flex-col'>
			<Header />
			<div className='w-[1000px] h-[600px] bg-[#D9D9D9] m-5 rounded-lg border border-[#D9D9D9] p-5'>
				<p>Product #1</p>
			</div>
		</div>
	)
}
