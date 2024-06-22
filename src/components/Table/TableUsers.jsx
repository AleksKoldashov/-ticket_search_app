import React, { useState } from 'react';
import { Button, Table, Space,  Dropdown } from 'antd';
import {
  useQuery,
  QueryClient,
  useQueryClient
} from 'react-query';
import { getProduct } from '../../api/api';


const { Column, ColumnGroup } = Table;



const TableUsers = ({data}) => {
   

const query = useQuery('users',getProduct) 

console.log(query.data.data);
    const [data1, setData] = useState(data)
    const [input1, setInput1] = useState()

    const createUser =(event)=>{
      event.preventDefault(setData([...data1,{name: input1}]))
      }
    const deletUsers = (record)=>{
      console.log(record);
        setData((pre)=>{
          return pre.filter((user)=>user.id !== record.id)
        })
    }
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
      },
      {
        title: 'Action',
        key: 'action',
        render: (record)=>{
          return<>
          <Button onClick={()=>{deletUsers(record)}}>Удалить{record.name}</Button>
          </>
        }
      },
    ];
    

  return (
    <div>
      {/* {data1.map((user, index) => (
        <table>
        <li user={user} index={index + 1} key={user.id} >
          {user.name} 
          </li>
          <button onClick={()=>deletUsers(user.name)}>Удалить</button> 
        </table> 
        
      ))} */}
       <form >
        <input  onChange={(e)=>{setInput1(e.target.value)}}></input>
        <button onClick={(event,input1)=> createUser(event,input1)}>Добавить</button>
        </form>
        {/* <Table dataSource={data1} columns={columns} />; */}
    </div>
     
  );
    
     

   
}
export default TableUsers;
