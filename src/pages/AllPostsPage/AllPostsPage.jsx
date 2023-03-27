import { useEffect, useState } from "react";
import * as postsAPI from "../../utilities/posts-api";
import NewPostForm from "../../components/NewPostForm/NewPostForm";
import PostItem from "../../components/PostItem/PostItem";

export default function AllPostsPage() {
    const [posts, setPosts] = useState([]);
    const [createPost, setCreatePost] = useState(false);

    useEffect(function() {
        async function getPosts() {
            const allPosts = await postsAPI.getAll();
            setPosts(allPosts)
        }
        getPosts();
    }, [posts]);

    async function handleAddPost(postData) {
        const post = await postsAPI.add(postData);
        console.log(post);
        setPosts([...posts, post]);
    }

    const allPosts = posts.map((post, idx) => <PostItem post={post} key={idx} />);
    return (
        <>
            <h1>All Posts Page</h1>
            <button onClick={() => setCreatePost(!createPost)}>Make A Post?</button>
            <NewPostForm handleAddPost={handleAddPost} />
            <h3>All Posts</h3>
            {allPosts}
        </>
    );
}