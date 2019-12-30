import React, { useState } from "react"
import Axios from "axios"

//This sets the interface for the username from the api
interface IUsers {
    username: string
  }

const Users: React.FC<IUsers> = ({username}) =>{
    // These useStates are here to set the inital values for the username and toggle 
    const [users, setUsers] = React.useState<IUsers>({username})
    const [toggle, setToggle] = useState(false)

//  This is the frontend peice of the api call. On a click of a button it will initate send the request to the backend.
const handleGetUsers = () =>{
    Axios.get("/users").then(resp =>{
        setToggle(!toggle)
        setUsers(resp.data)
        console.log(resp.data)
    })
}
    return (
        <div className="container">
            <button className="buttons" onClick={handleGetUsers}>Single User</button>
            <div className="allUsers" id={toggle ? "shown" : "notShown"} >
                {users === undefined ? "" : (
                    <p className="content">User: {users.username}</p>
                )}
            </div>
        </div>
    )
}


export default Users