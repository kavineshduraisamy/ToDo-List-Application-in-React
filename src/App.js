import { useState } from "react";
import Clock from 'react-live-clock';
import './Act.css'
export default function  App(){
    const [todo,setTodo]=useState([]);
    const [value,setValue]=useState('')
function handle(e){
    e.preventDefault();
    let newitem = value;
    let newlist = [...todo,{text:newitem,}]
    setTodo(newlist) 
    setValue('')
}
const removeItem = (index) => {
    const newList = [...todo];
    newList.splice(index, 1);
    setTodo(newList);
  };
    let list = todo.map((item,index)=>
    <li className="list" >
        {item.text}&nbsp;&nbsp;<Clock format={'hh:mm:ss A'} timezone={'IN/Pacific'} /><div onClick={()=>removeItem(index)} style={{float:'right'}}>(-)</div>

    </li>)
    return(
        <>
        {/* <h1>Task Tracker</h1> */}
        {/* <p>Input Tasks that have been completed below and keep track of the time when each item was added.</p> */}
        <div className="box">      
            {list} 
        <form onSubmit={handle}> <br/>
        <input 
            placeholder="Add Event..."  
            value={value}
            onChange={e=>setValue(e.target.value)} type='text'
        /> Press Enter to Submit
        </form>
        </div>
        </>
    )
}
