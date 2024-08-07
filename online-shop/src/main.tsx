import React from 'react'
import ReactDOM from 'react-dom/client'
// import HomePage from './components/HomePage.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CartPage from './components/CartPage.tsx'
import Error404Page from './components/Error404Page.tsx'
import ProductPage from './components/ProductPage.tsx'
import App from './App.tsx'
import { CartProvider } from './components/CartContext.tsx'
import QuantityCounter from './components/QuantityCounter.tsx'

const router = createBrowserRouter([
	{
		path: '/',
		Component: App,
		errorElement: <Error404Page />,
	},
	{
		path: 'cartPage',
		Component: CartPage,
		children: [],
	},
	{
		path: '/products/:productId',
		Component: ProductPage,
	},
	{
		path: '/quantityCounter',
		Component: QuantityCounter,
	},
])

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<CartProvider>
			<RouterProvider router={router} />
		</CartProvider>
	</React.StrictMode>
)
