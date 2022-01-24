import { Dropdown,Row, Col, DropdownButton ,SplitButton,Menu,MenuItem,ButtonToolbar} from "react-bootstrap";
import {useState} from 'react';
import ButtonGroup from "react-bootstrap/ButtonGroup";
import './Select.css'
import "bootstrap/dist/css/bootstrap.min.css";
const Select = ({add}) =>{

    const [device,setDevice] = useState("---請選擇電器---");
    
    function handleSelect(e){
        console.log(e.target.outerText);
        setDevice(e.target.outerText);
        add(function(){
            return device;
        });
        

    };
    
    
    return(
        
        <DropdownButton
        as={ButtonGroup}
        
        variant="light"
        title={device}
        className = 'dropdown'
      >
        <Dropdown.Menu>{add(function(){
            return device;
        })}
                <Dropdown.Item  onClick={handleSelect}>全部電器</Dropdown.Item>
                <Dropdown.Item  onClick={handleSelect}>各種電器</Dropdown.Item>
                <Dropdown.Item onClick={handleSelect} >電鍋</Dropdown.Item>
                <Dropdown.Item  onClick={handleSelect}>暖氣</Dropdown.Item>
                <Dropdown.Item  onClick={handleSelect}>吹風機</Dropdown.Item>
                <Dropdown.Item  onClick={handleSelect}>空氣清淨機-白</Dropdown.Item>
                <Dropdown.Item  onClick={handleSelect}>空氣清淨機-黑</Dropdown.Item>
                <Dropdown.Item  onClick={handleSelect}>空氣清淨機-小</Dropdown.Item>
            </Dropdown.Menu>
      </DropdownButton>    
    //   <Dropdown>
    //       <Dropdown.Toggle>
    //           <Dropdown.T
    //           <Dropdown.Menu>
    //                 <Dropdown.Item  onClick={handleSelect}>全部電器</Dropdown.Item>
    //                 <Dropdown.Item  onClick={handleSelect}>各種電器</Dropdown.Item>
    //                 <Dropdown.Item onClick={handleSelect} >電視</Dropdown.Item>
    //                 <Dropdown.Item  onClick={handleSelect}>電風扇</Dropdown.Item>
    //                 <Dropdown.Item  onClick={handleSelect}>吹風機</Dropdown.Item>
    //                 <Dropdown.Item  onClick={handleSelect}>烤箱</Dropdown.Item>
    //                 <Dropdown.Item  onClick={handleSelect}>空氣清淨機</Dropdown.Item>
    //           </Dropdown.Menu>
                
    //       </Dropdown.Toggle>
    //   </Dropdown>   
        
       
        
        
    );
}


export default Select;