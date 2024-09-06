import React from 'react'
import "./AppDawonload.css"
import appstore from "../../assets/appstore.png"
function AppDawonload() {
  return (
    <div className='app-dawonload' id='app-dawonload'>
<p>for Better Expreience dawnload <br/> tomato App</p>
<div  className='app-dawonload-platfroms' >
    <img src={appstore} />
    <img src={appstore} />

</div>
    </div>
  )
}

export default AppDawonload