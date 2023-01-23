
export default function Navbar({ title }) {
    return (
        <nav className="navbar">
            <h1>{title}</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create">New Post</a>
            </div>
        </nav>
    )
}