import { useState } from "react";
import Modal from "../Modal/Modal";
import CommentForm from "../CommentForm/CommentForm";

export default function PostItem({ post }) {
    const [comment, setComment] = useState(true);
    return (
        <>
            <Modal title={post.user.name} about={post.user.about} comment={comment} setComment={setComment} >
                <p>
                {post.content}
                </p>
            </Modal>
            <hr />
        </>
    );
}