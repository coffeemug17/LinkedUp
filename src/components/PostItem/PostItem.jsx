import { useState } from "react";
import Modal from "../Modal/Modal";
import CommentCard from "../CommentCard/CommentCard";

export default function PostItem({ post, setPosts, posts, setComment }) {
    const [viewComment, setViewComment] = useState(true);
    return (
        <>
            <Modal title={post.user.name} about={post.user.about} viewComment={viewComment} setViewComment={setViewComment} post={post} posts={posts} setPosts={setPosts} setComment={setComment} >
                <p>
                {post.content}
                </p>
            </Modal>
            <hr />
        </>
    );
}