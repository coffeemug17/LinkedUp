import { useState } from "react";
import CommentCard from "../CommentCard/CommentCard";

export default function CommentForm() {
    const [comments, setComments] = useState([]);

    function handleCommentFormSubmit(evt) {
        evt.preventDefault();

    }

    const mappedComments = comments.map((comment,idx) => <CommentCard comment={comment} key={idx} />);
    return (
        <>
            <form onSubmit={handleCommentFormSubmit}>
                <input type="text" />
                <button type="submit">Submit</button>
            </form>
            <hr />
            {comments}
        </>
    );
}