import { useState } from "react";
import Button from 'react-bootstrap/Button';
import "./NewPostForm.css";

export default function NewPostForm({ handleAddPost, newPost, setCreatePost, createPost, setNewPost }) {
    function handleSubmit(evt) {
        evt.preventDefault();
        handleAddPost(newPost);
        setNewPost({content: ''});
        setCreatePost(!createPost);
    }

    function handleChange(evt) {
        setNewPost({...newPost, [evt.target.name]: evt.target.value})
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="NewPostForm">
                <textarea className="textarea" type="text" value={newPost.content} name="content" onChange={handleChange} placeholder="Start a Post!" />
                <div className="button">
                    <Button variant="success" type="submit">Submit</Button>
                </div>
            </form>
        </div>
    );
}