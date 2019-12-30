import React from 'react'
import "font-awesome/css/font-awesome.min.css"



const Header:React.FC = () =>{
    return(
        <div className="mainHeader">
            <h1 className="titleHeader">PlaceHolderCalls</h1>
            <p>Luis Alonso</p>
            <div className="icons">
                <a className="ic" href="https://www.github.com/lalonso317" target="_blank" rel="noopener noreferrer"><p><i className="fa fa-github"></i></p></a>
                <a className="ic" href="https://www.linkedin.com/in/luis-alonso-b62a38194/" target="_blank" rel="noopener noreferrer"><p><i className="fa fa-linkedin"></i></p></a>
                <a className="ic" href="https://lalonso317.github.io/LA-Portfolio_v1/" target="_blank" rel="noopener noreferrer"><p><i className="fa fa-user-circle"></i></p></a>
            </div>
        </div>
    )
}

export default Header