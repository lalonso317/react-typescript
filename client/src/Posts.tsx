import React, { useState } from "react"
import Axios from "axios"

interface IPosts{
    title: string,
    body: string
}

const Posts: React.FC<IPosts> = ({title, body}) =>{
    const [ posts, setPosts ] = useState<IPosts>({title, body})
    const [ toggle, setToggle ] = useState(false)
    const handleGetPosts = () =>{
       
       Axios.get("/posts").then(resp =>{
           setToggle(!toggle)
           console.log(resp.data)
        return setPosts(resp.data)
    
       })
}

    return(
        <div className="container">
         <button className="buttons" onClick={handleGetPosts}> Single Post</button>
            <div className="allPosts" id={toggle ? "shown" : "notShown"} >
                {posts === undefined ? "" : (
                    <div className="content">
                        <p>Title: {posts.title}</p>
                        <p>Body: {posts.body}</p>
                    </div>
                )}
              
            </div>
        </div>
    )
}

export default Posts
