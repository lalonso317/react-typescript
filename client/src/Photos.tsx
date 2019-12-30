import React, { useState } from "react"
import Axios from "axios"

interface IPhoto{
    url: string
}

const Photos: React.FC<IPhoto> = ({url}) =>{
const [ photos, setPhotos ] = useState<IPhoto>({url})
const [ toggle, setToggle ] = useState(false)

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