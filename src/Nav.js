import React from 'react'
import {Link} from 'react-router-dom'
const Nav = () => {
    return (
        <div>

            <ul>
            <Link to='/home'>
            
             <li>Home</li>
            </Link>   
            <Link to="/services">

                <li>services</li>
            </Link>
            <Link to="/">
                <li>Main</li>
            </Link>

            </ul>


        </div>
    )
}

export default Nav

