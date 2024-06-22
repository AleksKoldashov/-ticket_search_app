// import React, { useState } from 'react';
// import { Button, Form, Space, Table, Tag } from 'antd';
// import {EditOutlined, DeleteOutlined} from '@ant-design/icons'
// import {
//   useQuery,
//   QueryClient,
//   useQueryClient
// } from 'react-query';



// const TablePost = () => {

// const queryClient = useQueryClient()

//     // const [data1, setData]= useState(data)

//     const columns = [
//         {
//           title: 'title',
//           dataIndex: 'title',
//           key: '1',
//         },
//         {
//           title: 'body',
//           dataIndex: 'body',
//           key: '2',
//         },
//         {
//           title: 'Address',
//           dataIndex: 'address',
//           key: '3',
         
//         },
//         {
//             title: 'Action',
//             key: 'action',
//             render: (record) => (
//               <Space size="middle">
//                 <a>Invite {record.age}</a>
//                 <DeleteOutlined onClick={()=>{DeleteUser(record)}} style={{color:'red'}}/>
//               </Space>
//             ),
//           },
//       ];
//       const AddUser = ()=>{
//         const randomNumber = parseInt(Math.random()*1000)
//         const newUser = {
//               id: randomNumber,
//               name: 'Name' + randomNumber,
//               age: randomNumber,
//               address: 'Sydney No. 1 Lake Park' + randomNumber,
//         }
//         setData((pre)=>{
//             return [...pre, newUser]
//         })
//       }
//       const DeleteUser = (record)=>{
//         setData((pre)=>{
//             return pre.filter((user)=>user.id !== record.id)
//         })
//       }
//     return(
//         <>
//         <Button onClick={AddUser}>Добавить users</Button>
//         <Table columns={columns} dataSource={data1} />
        
//         </>
//     )
// }

// export default TablePost;