import "./Modal.css"
import CommentForm from "../CommentForm/CommentForm";
import CommentCard from "../CommentCard/CommentCard";

export default function Modal({ children, title, about, viewComment, setViewComment, post, posts, setPosts, setComment, handleDeleteComment }) {
    const mappedComments = post.comments.map((comment,idx) => <CommentCard comment={comment} key={idx} user={comment.user.name} handleDeleteComment={handleDeleteComment} />);
    return (
        <div className="Modal">
            <header>{title} &nbsp; - &nbsp; {about}
            </header>
            <div>{children}</div>
            <footer>
                <button onClick={() => setViewComment(!viewComment)}
                >Comments</button>
                {viewComment ? <div></div> : 
                <>
                    <CommentForm post={post} setPosts={setPosts} posts={posts} setComment={setComment} />
                    {mappedComments}
                </>
                }
            </footer>
        </div>
      );
}