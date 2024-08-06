import React, { createContext, useContext, useState, ReactNode } from 'react'
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
