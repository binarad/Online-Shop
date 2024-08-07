import { useState } from 'react'

export default function QuantityCounter() {
	const [quantityCounter, setQuantityCounter] = useState<number>(0)

	const increment = () => {
		setQuantityCounter(quantityCounter + 1)
		console.log(quantityCounter)
	}

	const decrement = () => {
		if (quantityCounter < 0 || quantityCounter === 0) return
		setQuantityCounter(quantityCounter - 1)
		console.log(quantityCounter)
	}

	return (
		<div className='flex justify-center items-center bg-slate-700 w-full'>
			<button
				type='button'
				className='w-[50px] bg-slate-400 m-2'
				onClick={decrement}
			>
				-
			</button>
			<p className='w-[50px] bg-slate-400 m-2 justify-center items-center flex'>
				{quantityCounter}
			</p>
			<button
				type='button'
				className='w-[50px] bg-slate-400 m-2'
				onClick={increment}
			>
				+
			</button>
		</div>
	)
}
