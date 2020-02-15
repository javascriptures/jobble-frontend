import React from 'react'
import turkey from '../images/jobble-turkey.png'

function Header () {

    return(
        <nav>
            <img className="clink"src={turkey} alt="jobble turkey" />
            <link href="https://fonts.googleapis.com/css?family=Comfortaa&display=swap" rel="stylesheet"/>
            <h1 className="title">Jobble</h1>
        </nav>
    )
}
export default Header