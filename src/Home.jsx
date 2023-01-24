import { useState, useEffect } from "react"
import BlogList from "./BlogList"

export default function Home() {
    const [blogs, setBlogs] = useState(null)

    const [luckyNum, setLuckyNum] = useState(0)
    const [error, setError] = useState(null)

    function handleDelete(id) {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        setLuckyNum(Math.floor(Math.random() * (100 - 1 + 1) + 1));
        fetch('http://localhost:8000/blogs')
            .then(res => {
                if(!res.ok) {
                    throw Error('could not fetch data')
                }
                return res.json();
            })
            .then((data) => {
                setBlogs(data);
                setError(null);
            })
            .catch(err => {
                setError(err.message);
            })
    }, []);
    
    return(
        <div className="home">
            <h6 className="lucky-num">Your lucky number is: {luckyNum}</h6>
            <div className="blog-list">
                {blogs ? <BlogList blogs={blogs} setBlogs={setBlogs} handleDelete={handleDelete}/> : 'Fetching blog posts...'}
                { error && <div>{error}</div> }
            </div>
        </div>
    )
}