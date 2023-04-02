import "./Modal.css"
import CommentForm from "../CommentForm/CommentForm";
import CommentCard from "../CommentCard/CommentCard";

export default function Modal({ user, children, title, about, viewComment, setViewComment, post, posts, setPosts, setComment, handleDeleteComment, handleAddLike }) {
    const mappedComments = post.comments.map((comment,idx) => 
        <CommentCard comment={comment} 
            key={idx} userComment={comment.user.name} 
            handleDeleteComment={handleDeleteComment} 
            user={user}
        />);
    return (
        <div className="Modal">
            <header>{title} &nbsp; - &nbsp; {about}
            </header>
            <div>{children}</div>
            <footer>
                <h4>
                    {(mappedComments.length !== 1)
                        ?
                        <>
                        {mappedComments.length} comments!
                        </>
                        :
                        <>
                        {mappedComments.length} comment!
                        </>
                    } 
                </h4>
                <button onClick={() => handleAddLike(post._id)}>Like 👍</button>
                <button onClick={() => setViewComment(!viewComment)}
                >Comments💭</button>
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