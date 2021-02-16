import React from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {

    return (
        
        
        <li className="dropdown dropdown-user">
            <Link to='/profile' style={{textDecoration:'none', display: 'inline-block'}}>
                <a href="javascript:;" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                    <img alt="" className="img-circle" src="./assets/layouts/layout/img/avatar3_small.jpg" />
                    <span className="username username-hide-on-mobile"> Profile </span>
                </a> 
            </Link>    
        </li> 
        
    )
}

export default Profile;