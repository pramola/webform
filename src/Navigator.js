import React from 'react'
import {NavLink} from 'react-router-dom'
import './Nav.css'

function Navigator(){
    return (<div className="navbar">
        <div className="left-nav"></div>
        
            <div className="right-nav-links">
                <NavLink  exact className="nav-link" activeClassName="active-nav-link" to="/form">Form</NavLink>
                <NavLink exact className="nav-link" activeClassName="active-nav-link" to="/">Table</NavLink>
            </div>
        
    
    </div>)
}

export default Navigator;