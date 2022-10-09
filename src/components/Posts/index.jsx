import { useEffect, useState } from "react"
import { Post } from "./Post"
import './styles.css'
const API_POSTS_URL = 'https://jsonplaceholder.typicode.com/posts'

export const Posts = () => {
    const [postsData, setPostsData] = useState([])

    useEffect(() => {
        fetch(API_POSTS_URL)
            .then(res => res.json())
            .then(data => {
                setPostsData(data)
            })
    }, [])

    return (
        <div>
            <h1>Posts</h1>
            <div className="posts-wrapper">
                {postsData.map(post=><Post title={post.title} description={post.body} key={post.id}/>)}
            </div>
        </div>
    )
}