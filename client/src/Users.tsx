import React, { useState } from "react"
import Axios from "axios"


interface IUsers {
    username: string
  }

const Users: React.FC<IUsers> = ({username}) =>{
    const [users, setUsers] = React.useState<IUsers>({username})
    const [toggle, setToggle] = useState(false)

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