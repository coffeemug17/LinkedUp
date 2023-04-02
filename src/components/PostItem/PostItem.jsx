import { useState } from "react";
import Modal from "../Modal/Modal";
import CommentCard from "../CommentCard/CommentCard";
import * as commentsAPI from "../../utilities/comments-api";


export default function PostItem({ user, post, setPosts, posts, setComment, handleDeletePost }) {
    const [viewComment, setViewComment] = useState(true);

    async function handleDeleteComment(id) {
        const comment = await commentsAPI.deleteComment(id);
        setComment(comment);
    }
    return (
        <>
            <Modal 
                title={post.user.name} 
                about={post.user.about} 
                viewComment={viewComment} 
                setViewComment={setViewComment} 
                post={post} posts={posts} setPosts={setPosts} 
                setComment={setComment} 
                user={user}
                handleDeleteComment={handleDeleteComment}
            >
                <p>
                {post.content}
                {user._id === post.user._id 
                    ?
                    <button onClick={() => handleDeletePost(post._id)}>Delete Post</button>
                    :
                    <></>
                }
                </p>
            </Modal>
            <hr />
        </>
    );
}