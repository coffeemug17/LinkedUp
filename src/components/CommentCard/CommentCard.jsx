export default function CommentCard({ comment, user }) {
    // console.log(comment.co, 'this');
    return (
        <>
            {comment.content}
            {user}
            <hr />
        </>
    );
}