import React, { useState } from "react"
import Axios from "axios"

//This sets the interface for the photo from the api
interface IPhoto{
    url: string
}

const Photos: React.FC<IPhoto> = ({url}) =>{
// These useStates are here to set the inital values for the photo and toggle 
const [ photos, setPhotos ] = useState<IPhoto>({url})
const [ toggle, setToggle ] = useState(false)

//  This is the frontend peice of the api call. On a click of a button it will initate send the request to the backend.
const handleGetPhotos = () =>{
    Axios.get("/photos").then(resp =>{
        setToggle(!toggle)
       setPhotos(resp.data)
    })
}
    return(
        <div className="container">
            <button className="buttons" onClick={handleGetPhotos}>Single Photo</button>
            <div className="allPhotos" id={toggle ? "shown" : "notShown"} >
                {photos === undefined ? "" : (
                    <div className="content" >
                        <img alt="" src={photos.url} />
                    </div>
                )}
            </div>
        </div>
    )
}

export default Photos