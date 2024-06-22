import React, { useState } from 'react';
import { Button, Table, Space,  Dropdown } from 'antd';
const { Column, ColumnGroup } = Table;



const TableUsers = ({data}) => {

    const [data1, setData] = useState(data)
    const [input1, setInput1] = useState()

    const createUser =(event)=>{
      event.preventDefault(setData([...data1,{name: input1}]))
      }
    const deletUsers = (name)=>{
        console.log(name);
        const user = data1.filter((d)=>d.name !== name)
        return setData(user)
    }

    
  // const itemid = ()=>{
  //     const item = data1.map((user)=>user.id)
  //     return item
  //   }

  // console.log(input1);

  return (
    <div>
      {data1.map((user, index) => (
        <table>
        <li user={user} index={index + 1} key={user.id} >
          {user.name} 
          </li>
          <button onClick={()=>deletUsers(user.name)}>Удалить</button> 
        </table> 
        
      ))}
       <form >
        <input  onChange={(e)=>{setInput1(e.target.value)}}></input>
        <button onClick={(event,input1)=> createUser(event,input1)}>Добавить</button>
        </form>
    </div>
     
  );
    
     

   
}
export default TableUsers;