import "./Modal.css"
import CommentForm from "../CommentForm/CommentForm";

export default function Modal({ children, title, about, viewComment, setViewComment, post, mappedComments }) {

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
                    <CommentForm post={post} />
                    {mappedComments}
                </>
                }
            </footer>
        </div>
      );
}