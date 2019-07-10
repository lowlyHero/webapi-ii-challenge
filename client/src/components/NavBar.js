import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='nav-wrapper'>
            <NavLink to='/posts'>Posts</NavLink> <br />
        </div>
    )
}

export default NavBar