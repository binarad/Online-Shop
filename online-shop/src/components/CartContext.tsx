import { createContext, useContext, useState, ReactNode } from 'react'
import { ProductType } from '../App'

interface CartContextType {
	cart: ProductType[]
	addToCart: (product: ProductType) => void
	removeFromCart: (productName: string) => void
	clearCart: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const useCart = () => {
	const context = useContext(CartContext)
	if (!context) {
		throw new Error('useCart must be used within a CartContextProvider')
	}
	return context
}

export const CartProvider = ({ children }: { children: ReactNode }) => {
	const [cart, setCart] = useState<ProductType[]>([])

	const addToCart = (product: ProductType) => {
		setCart(prevCart => {
			const existingProduct = prevCart.find(item => item.name === product.name)

			if (existingProduct) {
				return prevCart.map(item =>
					item.name === product.name
						? { ...item, quantity: item.quantity + 1 }
						: item
				)
			} else {
				return [...prevCart, { ...product, quantity: 1 }]
			}
		})
	}
	// const addToCart = (product: ProductType) => {
	// 	setCart(prevCart => [...prevCart, product])
	// }

	const removeFromCart = (productName: string) => {
		setCart(prevCart =>
			prevCart.filter(product => product.name !== productName)
		)
	}

	const clearCart = () => {
		setCart([])
	}

	return (
		<CartContext.Provider
			value={{ cart, addToCart, removeFromCart, clearCart }}
		>
			{children}
		</CartContext.Provider>
	)
}
