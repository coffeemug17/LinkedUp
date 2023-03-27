import { useEffect, useState } from "react";
import * as postsAPI from "../../utilities/posts-api";
import NewPostForm from "../../components/NewPostForm/NewPostForm";

export default function AllPostsPage() {
    const [posts, setPosts] = useState([]);
    const [createPost, setCreatePost] = useState(false);

    useEffect(function() {
        async function getPosts() {
            const allPosts = await postsAPI.getAll();
            setPosts(allPosts)
        }
        getPosts();
    }, []);

    async function handleAddPost(postData) {
        const post = await postsAPI.add(postData);
        console.log(post);
        setPosts([...posts, post]);
    }

    return (
        <>
            <h1>All Posts Page</h1>
            <button onClick={() => setCreatePost(!createPost)}>Make A Post?</button>
            <NewPostForm handleAddPost={handleAddPost} />
        </>
    );
}