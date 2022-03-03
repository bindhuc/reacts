import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';

const Header=()=>{
    return(
        <div className='nav'>
            <Link to='/home' className='head'>Home</Link>
            <Link to='/student' className='head'>Student</Link>
            <Link to='/contact' className='head'>Contact</Link>
        </div>
    );
}


   

export default Header