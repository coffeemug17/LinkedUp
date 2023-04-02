export default function CommentCard({ comment, user, userComment, handleDeleteComment }) {
    return (
        <>
            {userComment}
            &nbsp; - &nbsp;
            {comment.content}
            {user._id === comment.user._id 
                ?
                <button onClick={() => handleDeleteComment(comment._id)} >DELETE</button>
                :
                <></>
            }
            <hr />
        </>
    );
}