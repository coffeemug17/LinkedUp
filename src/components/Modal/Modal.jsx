import { useState } from "react";
import "./Modal.css"

export default function Modal({ children, title }) {
    const [comment, setComment] = useState(true);
    return (
        <div className="Modal">
            <header>{title}</header>
            <div>{children}</div>
            <footer>
                <button onClick={() => setComment(!comment)}
                >Comments</button>
                {comment ? <div></div> : <h1>no</h1>}
            </footer>
        </div>
      );
}