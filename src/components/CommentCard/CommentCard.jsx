export default function CommentCard({ comment, user, handleDeleteComment }) {
    return (
        <>
            {user}
            &nbsp; - &nbsp;
            {comment.content}
            <button onClick={() => handleDeleteComment(comment._id)} >DELETE</button>
            <hr />
        </>
    );
}