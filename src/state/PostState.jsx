import React, { useState } from 'react';
import {
  useQuery,
} from 'react-query';
import './App.css';

import { getPosts } from '../api/api';
import TablePost from '../components/Table/TablePost';


function PostState() {

  const { isLoading, error, data} = useQuery(['posts'],getPosts);
  if (isLoading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error.message}</p>;
  
  


 
  return (
    <div>
     
      <TablePost data={data}/>
      
    </div>
  );
}

export default PostState;
