import React, { useEffect } from 'react'
import { useState } from 'react'
import { IconType } from 'react-icons'

interface ButtonProps {
	label: string
	icon?: IconType
	onClick?: () => void
}

const AddToCartButton: React.FC<ButtonProps> = ({
	label,
	icon: Icon,
	onClick,
}) => {
	const [isAddedToCart, setIsAddedToCart] = useState<boolean>(false)

	const handleClick = () => {
		if (onClick) {
			onClick()
		}

		setIsAddedToCart(true)
	}

	useEffect(() => {
		if (isAddedToCart) {
			const timer = setTimeout(() => setIsAddedToCart(false), 2000)
			return () => clearTimeout(timer)
		}
	}, [isAddedToCart])
	return (
		<button
			onClick={handleClick}
			disabled={isAddedToCart}
			className='flex items-center hover:cursor-pointer bg-slate-500 text-white rounded-md p-2 mt-4 h-10 justify-center hover:bg-slate-600 w-full'
		>
			{Icon && <Icon size={24} className='mr-2' />}
			{isAddedToCart ? 'Added to cart' : label}
		</button>
	)
}

export default AddToCartButton
