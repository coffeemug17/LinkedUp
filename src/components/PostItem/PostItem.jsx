import Modal from "../Modal/Modal";
export default function PostItem({ post }) {
    return (
        <>
            <Modal title={post.user.name}>
                <p>
                {post.content}
                &nbsp; - &nbsp;
                </p>
            </Modal>
            <hr />
        </>
    );
}