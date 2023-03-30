import { useState } from "react";
import Modal from "../Modal/Modal";
import CommentCard from "../CommentCard/CommentCard";

export default function PostItem({ post }) {
    const [comments, setComments] = useState(null);
    const [viewComment, setViewComment] = useState(true);
    if (post.comments) {
        const mappedComments = post.comments.map((comment,idx) => <CommentCard comment={comment} key={idx} />);
    } else {
        const mappedComments = null
    }
    return (
        <>
            <Modal title={post.user.name} about={post.user.about} viewComment={viewComment} setViewComment={setViewComment} post={post} mappedComments={mappedComments} >
                <p>
                {post.content}
                </p>
            </Modal>
            <hr />
        </>
    );
}