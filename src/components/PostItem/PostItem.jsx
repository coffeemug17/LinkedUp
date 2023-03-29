import Modal from "../Modal/Modal";
export default function PostItem({ post }) {
    // console.log(post);
    return (
        <>
            <Modal title={post.user.name}>
                <p>

                {post.content}
                </p>
            </Modal>
            <hr />
        </>
    );
}