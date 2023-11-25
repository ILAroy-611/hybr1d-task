import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App'
import SearchContextProvider from './state/SearchContext'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
])
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <SearchContextProvider>
            <App />
        </SearchContextProvider>
    </React.StrictMode>
)
