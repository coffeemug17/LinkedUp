import { useState } from "react";

export default function NewPostForm({ handleAddPost }) {
    const [newPost, setNewPost] = useState({
        content: ''
    });
    function handleSubmit(evt) {
        evt.preventDefault();
        handleAddPost(newPost);
        setNewPost({content: ''});
    }

    function handleChange(evt) {
        setNewPost({...newPost, [evt.target.name]: evt.target.value})
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <textarea type="text" value={newPost.content} name="content" onChange={handleChange} />
                <button type="submit">Submit</button>
            </form>
        </>
    );
}