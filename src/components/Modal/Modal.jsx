import CommentForm from "../CommentForm/CommentForm";
import CommentCard from "../CommentCard/CommentCard";
import * as postsAPI from "../../utilities/posts-api";
import { useEffect } from "react";
import Button from 'react-bootstrap/Button';
import "./Modal.css"

export default function Modal({ user, company, children, title, about, viewComment, setViewComment, post, posts, setPosts, setComment, handleDeleteComment, handleAddLike }) {
    const mappedComments = post.comments.map((comment,idx) => 
        <CommentCard comment={comment} 
            key={idx} userComment={comment.user.name} 
            handleDeleteComment={handleDeleteComment} 
            user={user}
        />);
    
    return (
        <div className="Modal">
            <header>{title} &nbsp; - &nbsp; {about} at {company}
            </header>
            <div>{children}</div>
            <footer>
                <div className="postButtons">
                    <Button variant="dark" onClick={() => setViewComment(!viewComment)}
                    >Comments 💭</Button>
                    <Button variant="dark" onClick={() => handleAddLike(post._id)}>Like 👍</Button>
                    <h5>
                        {(post.likes.length !== 1)
                            ?
                            <>
                            {post.likes.length} likes!
                            </>
                            :
                            <>
                            {post.likes.length} like!
                            </>
                        } 
                    </h5>
                    <h5>
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
                    </h5>
                    {viewComment ? <div></div> : 
                    <div className="commentForm">
                        <CommentForm post={post} setPosts={setPosts} posts={posts} setComment={setComment} />
                        {mappedComments}
                    </div>
                    }
                </div>
            </footer>
        </div>
      );
}