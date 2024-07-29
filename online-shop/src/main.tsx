import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './HomePage.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CartPage from './components/CartPage.tsx'
import Error404Page from './components/Error404Page.tsx'
import ProductPage from './components/ProductPage.tsx'

const router = createBrowserRouter([
	{
		path: '/',
		Component: HomePage,
		errorElement: <Error404Page />,
	},
	{
		path: 'cartPage',
		Component: CartPage,
	},
	{
		path: '/products/:productId',
		Component: ProductPage,
	},
])

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
