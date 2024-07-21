import React from 'react'
import { useState } from 'react'
import { IconType } from 'react-icons'

interface ButtonProps {
	label: string
	disabled?: boolean
	outline?: boolean
	small?: boolean
	custom?: string
	icon?: IconType
	onClick?: () => void
}

const AddToCartButton: React.FC<ButtonProps> = ({
	label,
	disabled,
	outline,
	small,
	custom,
	icon: Icon,
	onClick,
}) => {
	const [isAddedToCart, setIsAddedToCart] = useState<boolean>(false)
	return (
		<button
			onClick={onClick}
			disabled={disabled}
			className='flex items-center hover:cursor-pointer bg-slate-500 text-white rounded-md p-2 mt-4 h-10 justify-center hover:bg-slate-600 w-full'
		>
			{Icon && <Icon size={24} />}
			{label}
		</button>
	)
}

export default AddToCartButton
