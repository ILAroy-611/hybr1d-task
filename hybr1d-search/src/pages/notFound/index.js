import { useNavigate } from 'react-router-dom'
import './style.css'

/**
 *
 *
 * @export
 * @return {*}
 */
export default function NotFound() {
    const navigate = useNavigate()
    return (
        <div className="not-found-wrapper">
            <div className="logo" onClick={() => navigate('/')}>
                Hacker Search
            </div>
            <h3 className="not-found-header">Page Not Found !!</h3>
        </div>
    )
}
