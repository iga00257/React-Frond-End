
import React from "react";
import * as faIcons from 'react-icons/fa'
import { useState } from 'react'
import logo from '../assets/logo/aetina/Header_EdgeEye_white95x25.png'

function HeadComponent(props){

    return(
        <div className="flex items-center h-full border-b" style={{borderColor:'#FBFBFB66'}}>
          <button onClick={()=>{
            console.log(props.sidebar);
            props.func(!props.sidebar);
          }} className='bg-primary'>
        <faIcons.FaBars/>
        </button >
        <a className=" cursor-pointer">
       <img className='mx-4' src={logo}/>
       </a>
        </div>
    )
}

export default HeadComponent;