import { useState } from "react";
import { useNavigate } from "react-router-dom"

export default function Create() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');
    const navigate = useNavigate();

    function handleSubmit(evt) {
        evt.preventDefault();
        const blog = {title, content, author};
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => 
            {
                navigate('/');
            })
    }

    return (
        <div className="create">
            <h2>Add a New Blog Post</h2>
            <form onSubmit={handleSubmit}>
                    <label>Title:</label>
                    <input
                        type="text"
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <label>Body:</label>
                    <textarea
                        required
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    >
                    </textarea>
                    <label>Author:</label>
                    <input
                        type="text"
                        required
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                    <button className="add-post">Add Blog Post</button>
            </form>
        </div>
    )
}