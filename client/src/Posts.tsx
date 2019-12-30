import React, { useState } from "react"
import Axios from "axios"

//This sets the interface for the post from the api
interface IPosts{
    title: string,
    body: string
}

const Posts: React.FC<IPosts> = ({title, body}) =>{
        // These useStates are here to set the inital values for the post and toggle 
    const [ posts, setPosts ] = useState<IPosts>({title, body})
    const [ toggle, setToggle ] = useState(false)

    //  This is the frontend peice of the api call. On a click of a button it will initate send the request to the backend.
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
