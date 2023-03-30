import { useEffect } from "react";
import { useState } from "react";
import * as commentsAPI from "../../utilities/comments-api";
import * as postsAPI from "../../utilities/posts-api";
import CommentCard from "../CommentCard/CommentCard";

export default function CommentForm({ post, setPosts, posts, setComment }) {
    const [newComment, setNewComment] = useState({content: ''});

    function handleCommentFormSubmit(evt) {
        evt.preventDefault();
        handleAddComment(newComment);
        setNewComment({content: ''});
    }

    function handleCommentFormChange(evt) {
        setNewComment({...newComment, [evt.target.name]: evt.target.value})
    }

    async function handleAddComment(commentData) {
        const comment = await commentsAPI.add(commentData, post._id);
        const updatedPosts = posts.map(p => p._id === comment._id ? comment : p);
        setPosts(updatedPosts);
        const updatePost = {...comment}
        setComment(updatePost);
    }

    return (
        <>
            <form onSubmit={handleCommentFormSubmit}>
                <input type="text" placeholder="Enter a Comment!" name="content" value={newComment.content} onChange={handleCommentFormChange} />
                <button type="submit">Submit</button>
            </form>
            <hr />
        </>
    );
}