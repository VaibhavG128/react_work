import React from 'react'
import '../css/HomePageCSS.css'
// import {Search} from '@mui/material/styles'
const Navbar = () => {

    return (
    <div className='wrapper'>
    <div className='left'>
      {/* <Search></Search> */}
    <input className='searchbar'></input></div>
    <div className='center'>
    <h1 className='logo'>SOLDO</h1>
    </div><div className='menuitem'>REGISTER</div>  
    <div className='menuitem'>SIGN IN</div>    
    <div className='menuitem'>
      <div className='base'>
        <div className='indicator'>
          <div className='notify_count'>3</div>
        </div>
      </div>

    </div>
       
     </div>
  )
}

export default Navbar
