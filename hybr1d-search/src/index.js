import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'
import SearchContextProvider from './state/SearchContext'
import NewsPost from './pages/newsPost'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <SearchContextProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </SearchContextProvider>
    </React.StrictMode>
)
