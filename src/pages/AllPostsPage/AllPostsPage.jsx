import { useEffect, useState } from "react";
import * as postsAPI from "../../utilities/posts-api";
import NewPostForm from "../../components/NewPostForm/NewPostForm";
import PostItem from "../../components/PostItem/PostItem";
import Button from 'react-bootstrap/Button';
import "./AllPostsPage.css";

export default function AllPostsPage({ user }) {
    const [posts, setPosts] = useState([]);
    const [createPost, setCreatePost] = useState(false);
    const [comment, setComment] = useState([]);
    const [like, setLike] = useState(null);
    const [newPost, setNewPost] = useState({
        content: ''
    });

    useEffect(function() {
        async function getPosts() {
            const allPosts = await postsAPI.getAll();
            setPosts(allPosts)
        }
        getPosts();
    }, [newPost, comment, like]);

    async function handleAddPost(postData) {
        const post = await postsAPI.add(postData);
        setPosts([...posts, post]);
    }

    async function handleDeletePost(postId) {
        const updatedPosts = await postsAPI.deletePost(postId);
        const remainingPosts = posts.filter((post) => post._id !== postId);
        setPosts(remainingPosts);
    }

    const allPosts = posts.map((post, idx) => 
        <PostItem post={post} key={idx} user={user}
            setPosts={setPosts} posts={posts} 
            like={like} setLike={setLike}
            setComment={setComment} handleDeletePost={handleDeletePost} 
        />);
    return (
        <div className="AllPostsPage">
            <Button variant="primary" onClick={() => setCreatePost(!createPost)}>Make A Post?</Button>
            {createPost ? <NewPostForm handleAddPost={handleAddPost} newPost={newPost} setNewPost={setNewPost} createPost={createPost} setCreatePost={setCreatePost} /> : <div></div>}
            {allPosts}
        </div>
    );
}