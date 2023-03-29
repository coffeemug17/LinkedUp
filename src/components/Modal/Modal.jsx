import "./Modal.css"
import CommentForm from "../CommentForm/CommentForm";

export default function Modal({ children, title, about, comment, setComment }) {
    return (
        <div className="Modal">
            <header>{title} &nbsp; - &nbsp; {about}
            </header>
            <div>{children}</div>
            <footer>
                <button onClick={() => setComment(!comment)}
                >Comments</button>
                {comment ? <div></div> : <CommentForm />}
            </footer>
        </div>
      );
}