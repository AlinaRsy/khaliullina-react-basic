import { json } from 'react-router-dom';
import s from './Posts.module.css';
import { useState, useEffect } from 'react';
export default function PostsPage(){
    const [posts, setPosts] = useState([]);
    async function fetchPosts(){
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await response.json();
        setPosts(posts);
    }
    useEffect(()=>{
        fetchPosts();
    },[]);
    return(
        <div className="container">
            <div className={s.posts}>
                {
                    posts.map((post)=>{
                        return <div className={s.post}>
                            <div className={s.post__name}>{post.title}</div>
                            <div className={s.post__name}>{post.body}</div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}