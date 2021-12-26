import {IconButton } from '@material-ui/core'
import LayersIcon from '@material-ui/icons/Layers';
import HomeIcon from '@material-ui/icons/Home';
import React from 'react'
import './Navbar.css'
function Navbar() {
    return (
        <div className='navbar'>
            <div className='logo' onClick={()=>window.scroll(0,0)}>
                <LayersIcon style={{color:'rgb(211, 52, 37)' ,fontSize:'2rem'}}/>
                <span> PhyXerSs </span>
            </div>
            <IconButton color='primary' size='medium' className='home-button' onClick={()=>{window.location.reload()}}>
                <HomeIcon style={{fontSize:'2.5rem'}}/>
            </IconButton>
                
            
        </div>
    )
}

export default Navbar
