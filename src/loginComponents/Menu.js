import React from 'react'

import { Link } from "react-router-dom";


const Menu = () => {

return <ul className='nav'>

    <li id = 'Home'>
        <Link  to ='/' className='nav-link'>Home</Link> 
    </li>
    <li id = 'About'>
        <Link to ='/about' className='nav-link'> About </Link>  
    </li>
    <li id = 'Contact'>
        <Link  to ='/contact' className='nav-link'> Contact </Link> 
    </li>
    <li id = 'Login'>
        <Link to ='/login' className='nav-link'> Login </Link>  
    </li>
    <li id = 'Login'>
        <Link to ='/fav' className='nav-link'> Favorites </Link>  
    </li>
</ul>

}

export default Menu