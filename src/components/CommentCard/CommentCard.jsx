import "./CommentCard.css";

export default function CommentCard({ comment, user, userComment, handleDeleteComment }) {
    return (
        <div className="CommentCard">
            <div>
            {userComment} &nbsp; - &nbsp; {comment.content}
            </div>
            {user._id === comment.user._id 
                ?
                <button onClick={() => handleDeleteComment(comment._id)} >DELETE</button>
                :
                <></>
            }
            <hr />
        </div>
    );
}