import BlogList from "./BlogList"
import useFetch from "./useFetch";

export default function Home() {
    const {data: blogs, luckyNum, error, setData} = useFetch('http://localhost:8000/blogs')

    return(
        <div className="home">
            <h6 className="lucky-num">Your lucky number is: {luckyNum}</h6>
            <div className="blog-list">
                {blogs ? <BlogList blogs={blogs}/> : 'Fetching blog posts...'}
                { error && <div>{error}</div> }
            </div>
        </div>
    )
}