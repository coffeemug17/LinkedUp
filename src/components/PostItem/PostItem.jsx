import { useState } from "react";
import Modal from "../Modal/Modal";
import CommentCard from "../CommentCard/CommentCard";
import Button from 'react-bootstrap/Button';
import * as commentsAPI from "../../utilities/comments-api";
import * as postsAPI from "../../utilities/posts-api";
import "./PostItem.css";


export default function PostItem({ user, post, setPosts, posts, setComment, handleDeletePost, like, setLike }) {
    const [viewComment, setViewComment] = useState(true);

    async function handleDeleteComment(id) {
        const comment = await commentsAPI.deleteComment(id);
        setComment(comment);
    }

    async function handleAddLike(postId) {
        const likedPost = await postsAPI.addLike(postId);
        setLike(!like);
    }

    return (
        <>
            <Modal 
                title={post.user.name} 
                about={post.user.about} 
                company={post.user.company}
                viewComment={viewComment} 
                setViewComment={setViewComment} 
                post={post} posts={posts} setPosts={setPosts} 
                setComment={setComment} 
                user={user} handleAddLike={handleAddLike}
                handleDeleteComment={handleDeleteComment}
            >
                <p>
                <h5>{post.content}</h5>
                </p>
                <div className="deletePost">
                    {user._id === post.user._id 
                        ?
                        <Button variant="danger" onClick={() => handleDeletePost(post._id)}>Delete Post</Button>
                        :
                        <></>
                    }

                </div>
            </Modal>
        </>
    );
}