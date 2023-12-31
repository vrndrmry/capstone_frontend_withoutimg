import React, { useContext, useEffect, useState } from 'react'
import Post from '../Post'
import { UserContext } from '../UserContext';

export default function IndexPage() {
  const [posts, setPost] = useState([])
  const { userInfo } = useContext(UserContext);
  // console.log(userInfo)
  useEffect(()=>{
    fetch(`https://car-blog-community-backend-withoutimg1.onrender.com/post`).then(res => {
      res.json().then(posts=>{
        console.log(posts[0])
        setPost(posts)
      })
    })
  },[])
  return (
    <div>
        {posts.length > 0 && posts.map((post,key) => (
          <Post key={posts[0]._id} {...post} />
        ))}
    </div>
  )
}