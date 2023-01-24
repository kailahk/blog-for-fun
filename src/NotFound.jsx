import { Link } from "react-router-dom";

export default function NotFound() {
    return(
        <div className="not-found">
            <h2>Sorry</h2>
            <br />
            <p>That page cannot be found</p>
            <br />
            <Link to='/'>Go Home</Link>
        </div>
    )
}