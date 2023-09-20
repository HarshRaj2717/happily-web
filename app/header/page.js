import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import PeopleIcon from '@mui/icons-material/People';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar,Button,Input } from '@mui/material';
import './header.css'


function header() {
  return (
    <div className='hheader'>
       <div className='hheader_content'>
        <div className='hheader_logo'>
            <img src="./happily.png" alt='logo'
            />
        </div>
             <div className='hheader_icons'>
            <div className='hheader_icon'><PersonIcon/></div>
            <div className='hheader_icon'><PeopleIcon/></div>
            <div className='hheader_icon'><ConnectWithoutContactIcon/></div>
            </div>
            
            <div className='hheader_input'><SearchIcon/>
            <input type="text" placeholder='Search Question'/>
            </div>
            <div className='btn'><Button>Add Questions</Button></div>
            
            <div className='hheader_rem'><Avatar/></div>
       </div>
    </div>
  )
}

export default header;