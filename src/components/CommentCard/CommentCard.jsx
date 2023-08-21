import Button from 'react-bootstrap/Button';
import "./CommentCard.css";

export default function CommentCard({ comment, user, userComment, handleDeleteComment }) {
    return (
        <div className="CommentCard">
            <div className='comment'>
            <h5>{userComment}</h5> 
            &nbsp; - &nbsp; 
            <h5>{comment.content}</h5>
            </div>
            <div className="deleteComment">
                {user._id === comment.user._id 
                    ?
                    <Button variant="danger" onClick={() => handleDeleteComment(comment._id)} >DELETE</Button>
                    :
                    <></>
                }
            </div>
        </div>
    );
}