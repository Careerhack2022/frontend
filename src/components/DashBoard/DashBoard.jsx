import './DashBoard.css';
import {useState} from 'react';
import Select from './Select';
function DashBoard() {
    const [device,setDevice] = useState([]);
    
    return (
        <Select  add = {setDevice} />
    );
}

export default DashBoard;