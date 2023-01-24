import { Link } from "react-router-dom"

export default function Navbar({ title }) {
    return (
        <nav className="navbar">
            <h1>{title}</h1>
            <div className="links">
                <Link className="go-home" to="/">Home</Link>
                <Link className="create-post" to="/create">New Post</Link>
            </div>
        </nav>
    )
}