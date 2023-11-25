import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import NewsPost from './pages/newsPost'
import './App.css'

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/news" element={<NewsPost />} />
            </Routes>
        </div>
    )
}

export default App
