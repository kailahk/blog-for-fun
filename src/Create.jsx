export default function Create() {
    return (
        <div className="create">
            <h2>Add a New Blog Post</h2>
            <form>
                    <label>Title:</label>
                    <input
                        type="text"
                        required
                    />
                    <label>Body:</label>
                    <textarea
                        required
                    >
                    </textarea>
                    <label>Author:</label>
                    <input
                        type="text"
                        required
                    />
            </form>
        </div>
    )
}