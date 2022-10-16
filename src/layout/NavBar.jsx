
import React from "react";
import * as faIcons from 'react-icons/fa'
import user from '../assets/user.png'
import eventIcon from '../assets/loud-speaker.svg'
import groupIcon from '../assets/storage-device.svg'
import logoutIcon from '../assets/log-out.svg'
import settingsIcon from '../assets/settings.svg'
import { useState } from "react";

function Navbar(props){
    const [showSetting,setshowSetting] = useState(true);
    function LinkComponent(props){
        console.log(props.show)
        return(
            <div style={{display:`${props.show ? 'none':'flex'}`}} className={`rounded-lg w-5/6 md:w-52 h-12 flex flex-col text-white`}>
            <a className="items-center w-full md:h-9 text-center py-3 text-secondary" href={props.link}>{props.name}</a>
            </div>
        )
    }

    return(
            <nav className={` md:w-64 w-2/4 flex flex-col h-full items-center  duration-300 ${props.sidebar ? "translate-x-0 " : "-translate-x-full"} `}>
                <div className=" h-44 flex justify-center w-full">
                    <div className=" flex-col justify-center mt-7 w-24 h-24 text-center">
                        <img className=" ml-1 mb-3" src={user}/>
                        <span>Hi Admin</span>
                    </div>
                </div>
                <div className=" rounded-lg w-5/6 md:w-52 h-12 flex flex-col md:hover:bg-secondary md:mx-5 md:pl-3 " href="#">
                    <a className="flex items-center w-full h-full cursor-pointer">           
                        <img className="mr-6" src={eventIcon}/>
                        Event
                    </a> 
                </div>
                <div className=" rounded-lg w-5/6 md:w-52 h-12 flex flex-col md:hover:bg-secondary md:mx-5 md:pl-3" href="#">
                    <a className="flex items-center w-ful h-full cursor-pointer">           
                        <img className="mr-6" src={groupIcon}/>
                        Group
                    </a> 
                </div>
                <div className=" rounded-lg w-5/6 md:w-52 h-12 flex flex-col bg-primary md:bg-settingToggle md:mx-5 md:pl-3 " href="#" onClick={()=>{
                            setshowSetting(!showSetting);
                            console.log("showSetting:"+showSetting)
                        }}>
                    <a className="flex items-center w-full h-full cursor-pointer">           
                        <img className="mr-6" src={settingsIcon}/>
                        Setting
                        <faIcons.FaAngleDown className=" ml-20" />
                    </a> 
                </div>
                <div className="flex flex-col">
                <LinkComponent name="Dashboard Settings" show={showSetting} link=""/>
                <LinkComponent name="Group Settings" show={showSetting} link=""/>
                <LinkComponent name="Profile Settings" show={showSetting} link=""/>
                <LinkComponent name="Device Settings" show={showSetting} link=""/>
                <LinkComponent name="User Settings" show={showSetting} link=""/>
                <LinkComponent name="Create User" show={showSetting} link=""/>
                <LinkComponent name="Mail Server" show={showSetting} link=""/>
                <LinkComponent name="Device Data" show={showSetting} link=""/>
                <LinkComponent name="API key" show={showSetting} link=""/>
                </div>

                

                
                <div className=" rounded-lg w-5/6 md:w-52 h-12 flex flex-col md:hover:bg-secondary md:mx-5 md:pl-3" href="#">
                    <a className="flex items-center w-ful h-full cursor-pointer " onClick={()=>{
                        console.log("aa been clicked")
                    }}>           
                        <img className="mr-6" src={logoutIcon}/>
                        logout
                    </a> 
                </div>

            </nav>
    )
}

export default Navbar;