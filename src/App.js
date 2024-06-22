import React, { useEffect, useState } from 'react';
import './App.css';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { apiAiroports, getTicket } from './api/apiService';
import CardTikcet from './components/Card';
import { TinyColor } from '@ctrl/tinycolor';
import { Input, DatePicker, Space, Checkbox, Button, ConfigProvider, } from 'antd';
import useQueriesUseQuerieAiroports from './components/hooks/UseQuerieAiroports';

const colors1 = ['#6253E1', '#04BEFE'];




function App() {
 const queryCache = useQueryClient() 

 const getHoverColors = (colors) =>
  colors.map((color) => new TinyColor(color).lighten(5).toString());
const getActiveColors = (colors) =>
  colors.map((color) => new TinyColor(color).darken(5).toString());

const [flag, setFlag] = useState(true)
const [input1, setInput1] = useState('Астрахань')
const [input2, setInput2] = useState('Москва')
const [day, setDay]=useState('')
const [day2, setDay2]=useState('')
const {data: apiAiroports, isSuccess: isSuccessapiAiroports} = useQueriesUseQuerieAiroports({input1,input2})

console.log(flag);
const origin = apiAiroports?.origin?.iata
const destination = apiAiroports?.destination?.iata

const {data, isPending, isError, error, isSuccess}=useQuery({
  queryKey: ['ticket'], 
  queryFn: ()=>getTicket({origin, destination, day, day2, flag}),
  select: data=>data.data
})

console.log(data);
const updateData =()=>{
  queryCache.invalidateQueries({queryKey:['airoports']})
  queryCache.invalidateQueries({queryKey:['ticket']})
}
const cheapTicket=()=>{
  queryCache.invalidateQueries({queryKey:['airoports']})
  queryCache.invalidateQueries({queryKey:['ticket']})
}
const onChangeCheckBox = (e) => {
  console.log(`checked = ${e.target.checked}`);
};
const onChange = (date, dateString) => {
  setDay(dateString)
  // console.log(date, dateString);
};

const onChange2 = (date, dateString) => {
  setDay2(dateString)
  // console.log(date, dateString);
};


useEffect(()=>{
  if(isSuccess){
    queryCache.invalidateQueries({queryKey:['airoports']})
  }
},[data, isSuccessapiAiroports,input1, input2])


useEffect(()=>{
  if(isSuccess){
    queryCache.invalidateQueries({queryKey:['ticket']})
  }
},[data, isSuccess,])

  return (
    <div className='App'>
          <div className='form_ticket'>
            <Space direction='horizontal'>
              ОТКУДА
              <Input placeholder="Basic usage" onChange={(e)=>setInput1(e.target.value)} value={input1} />
              <DatePicker onChange={onChange} />
            </Space>
            <Space direction='horizontal'>
              КУДА
              <Input placeholder="Basic usage" onChange={(e)=>setInput2(e.target.value)} value={input2} />
              <DatePicker onChange={onChange2} />
              <Checkbox onChange={onChangeCheckBox}>Туда обратно</Checkbox>
            </Space>
            <Space>
              <ConfigProvider
                theme={{
                  components: {
                    Button: {
                      colorPrimary: `linear-gradient(135deg, ${colors1.join(', ')})`,
                      colorPrimaryHover: `linear-gradient(135deg, ${getHoverColors(colors1).join(', ')})`,
                      colorPrimaryActive: `linear-gradient(135deg, ${getActiveColors(colors1).join(', ')})`,
                      lineWidth: 0,
                    },
                  },
                }}
              >
                <Button type="primary" size="large" onClick={()=>{updateData()}}>
                 Найти билет
                </Button>
              </ConfigProvider>
            </Space>
          </div>
          <div className='body_app'>
          <div className='sidebar'>
            cxvcvx
            </div>
          <div className='body_app_content'>
            <div className='search'>
              <button className='btn_1' onClick={()=>{cheapTicket()}}>Самый дешевый </button>
              <button className='btn_2' onClick={()=>{}}>Самый быстрый</button>
            </div>
            <div className='content'>
            { 
                isPending ? <p>Loading...</p>
                :
                isError ? <h1>пока нет данных</h1> :
                data?.length 
                ? 
                data?.map((card, index)=><CardTikcet data={card} key={index}/>)
                :
                <p>No data</p>
            }          
            </div>
          </div>
          
          </div>
          
    </div>
  );
}

export default App;
