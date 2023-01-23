
export default function Navbar({ title }) {
    return (
        <nav className="navbar">
            <h1>{title}</h1>
            <div className="links">
                <a className="go-home" href="/">Home</a>
                <a className="create-post" href="/create">New Post</a>
            </div>
        </nav>
    )
}