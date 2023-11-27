import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import NewsPost from './pages/newsPost'
import NotFound from './pages/notFound'
import './App.css'

/**
 *
 *
 * @return {*}
 */
function App() {
    return (
        <div className="App">
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/news" element={<NewsPost />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    )
}

export default App
