

//import useState hook to create menu collapse state
import React, { useState } from "react";

//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";

import {BsFillBarChartLineFill} from 'react-icons/bs';
//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "./SideBar.css";


const SideBar = () => {
  
  const [menucollapse,setMenu] = useState((window.innerWidth<window.innerHeight)?true:false);
  
  const menuclick = () =>{
    menucollapse?setMenu(false):setMenu(true);
  }
  console.log(window.innerHeight,window.innerWidth);
  
  return (
    <>
      <div id="header">
          {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar fixed ='top' collapsed = {menucollapse}>
          <SidebarHeader>
            <div className="close-menu" onClick={menuclick}>
              {menucollapse?(<FiArrowRightCircle/>):(<FiArrowLeftCircle/>)}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu active = 'true' iconShape="square">
              <MenuItem icon={<FiHome />} >
              <a href = '/' className = 'text' >Home</a>
              </MenuItem>
              <MenuItem icon={<BsFillBarChartLineFill />}><a href = '/DashBoard' className = 'text'>DashBoard</a></MenuItem>
              
              <MenuItem icon={< RiPencilLine/>}><a href = '/Analysis' className = 'text'>Analysis</a></MenuItem>
              <MenuItem icon={<BiCog />}><a href = '/Settings' className = 'text'>Settings</a></MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default SideBar;