import { Dropdown,Row, Col, DropdownButton } from "react-bootstrap";
import {useState} from 'react';
import './Select.css'
const Select = ({add}) =>{

    const [device,setDevice] = useState("---請選擇電器---");
    
    function handleSelect(e){
        setDevice(e.target.innerHTML);
    };
    
    return(
        <Dropdown>
            <Dropdown.Toggle  className = 'dropdown' >{device}</Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item onClick={handleSelect} >電視</Dropdown.Item>
                <Dropdown.Item  onClick={handleSelect}>電風扇</Dropdown.Item>
                <Dropdown.Item  onClick={handleSelect}>烤箱</Dropdown.Item>
                <Dropdown.Item  onClick={handleSelect}>空氣清淨機</Dropdown.Item>
            </Dropdown.Menu>
        
        </Dropdown>        
            
       
        
        
    );
}


export default Select;