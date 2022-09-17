import { margin } from '@mui/system'
import React from 'react'
import { Container, Grow, Grid, AppBar, TextField, Button, Paper } from '@material-ui/core';
// import Navbar from '../components/Navbar'
export default function Home() {
    return (
        <div>
            {/* <Navbar /> */}
            
            <div className='container-fluid'>
            {/* <AppBar className={classes.appBarSearch} position="static" color="inherit"> */}
     <img className='brand' style={{width: "100%",  height: "auto", marginBottom: "10px", objectFit:"cover"}} src='https://thumbs.dreamstime.com/b/business-project-startup-process-banner-scheme-hexagons-e-flat-line-design-illustration-concept-plan-website-header-90988976.jpg' alt='logo'/>
        <div className='container my-3 py-3'>
        <div className='row'>
          <div className='col-12 mb-5'>
            <h1 className='title' style={{textAlign:"center", marginTop:"50px", marginBottom:"20px"}}>About Us</h1>
            {/* <hr /> */}
            <p className='des' style={{fontSize:"22px", textAlign:"center", listStyle:"none", marginTop:"20px", padding:"2px 2px 20px 20px"}}>"ProjectLancer" is a project lending paltform for young talents. Students of various stream and search for interseting projects and work with teams from all over the world. Our main motive is to provide more knowledge and best experience for everyone. Even realtime product based comopany projects are also availabe.</p>
          </div>
        </div>
      </div>
      <div className='container my-3 py-3'>
        <div className='row'>
          <div className='col-12 mb-5'>
            <hr style={{marginTop:"30px"}}/>
            <h1 className='title' style={{textAlign:"center", marginTop:"50px", marginBottom:"20px"}}>Project streams</h1>
            {/* <hr /> */}
            <ul className='des' style={{fontSize:"22px", textAlign:"center", listStyle:"none", marginTop:"20px", padding:"2px 2px 20px 20px"}}>
              <li style={{padding:"10px"}}>Engineering</li>
              <li style={{padding:"10px"}}>Information Technology</li>
              <li style={{padding:"10px"}}>Business Development</li>
              <li style={{padding:"10px"}}>Commerce</li>
              <li style={{padding:"10px"}}>Marketing</li>
              <li style={{padding:"10px"}}>IOT</li>
              <li style={{padding:"10px"}}>Artificial Intelligence</li>
              <li style={{padding:"10px"}}>Human Resource</li>
              <li style={{padding:"10px"}}>Designing</li>
              <li style={{padding:"10px"}}>And more...</li>
            </ul>
          </div>
        </div>
      </div>
      </div>
        </div>
    )
}