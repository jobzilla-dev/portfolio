import React from 'react'
import me from '../assets/img/jobzz.png';

function home() {
  return (
    <div className="container">
    <div className="home">
        <div className="land">
      
        <div className="photooo"><img src={me} className="jobz-photo" alt="logo" /></div>
        <h1>JOBZILLA!</h1>
        
        </div>
    </div>
    </div>
  )
}

export default home