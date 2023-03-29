import "./Modal.css"

export default function Modal({ children, title }) {
    return (
        <div className="Modal">
          <header>{title}</header>
          <div>{children}</div>
        </div>
      );
}