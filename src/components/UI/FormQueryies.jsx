import React, { useState } from 'react';
import { TinyColor } from '@ctrl/tinycolor';
import { Input, DatePicker, Space, Checkbox, Button, ConfigProvider, Col, Row, } from 'antd';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import UseQuerieAiroports from '../hooks/UseQuerieAiroports';
import { getTicket } from '../../api/apiService';




const colors1 = ['#6253E1', '#04BEFE'];



export default function FormQueries () {
    const queryCache = useQueryClient() 

    const getHoverColors = (colors) =>
        colors.map((color) => new TinyColor(color).lighten(5).toString());
      const getActiveColors = (colors) =>
        colors.map((color) => new TinyColor(color).darken(5).toString());
    
    const [chek, setChek] = useState(false)  
    const [chek2, setChek2] = useState(false)  
    const [input1, setInput1] = useState('Москва')
    const [input2, setInput2] = useState('Сочи') 

  
    const [day, setDay]=useState('')
    const [day2, setDay2]=useState('')


    const apiAiroports = UseQuerieAiroports({input1,input2})
  
    const origin = apiAiroports.data?.origin?.iata
    const destination = apiAiroports.data?.destination?.iata

    const ticket =useQuery({
        queryKey: ['ticket'], 
        queryFn: ()=>getTicket({day, day2, origin, destination,chek2, chek}),
        select: data=>data.data,
        enabled: true
    })
    
 
    const updateData =()=>{
        queryCache.invalidateQueries({queryKey:['airoports']})
        queryCache.invalidateQueries({queryKey:['ticket']})
        queryCache.invalidateQueries({queryKey:['dayMonth']})
      }

    const onChangeCheckBox = (e) => {
        setChek(e.target.checked)
    };
    const onChangeCheckBox2 = (e) => {
      setChek2(e.target.checked)
      setDay2('')
  };
    const onChange = (date, dateString) => {
    setDay(dateString)
    };

    const onChange2 = (date, dateString) => {
    setDay2(dateString)
    };

    return <>
       <Space className='form_ticket'>
         <Space direction='vertical'>
            <Row wrap={false} gutter={12}>
            <Col span={3}>ОТКУДА</Col>
            <Col ><Input placeholder="Basic usage" onChange={(e)=>setInput1(e.target.value)} value={input1} /></Col>
            <Col span={12}>
              <Space direction='horizontal'>
                <DatePicker onChange={onChange}/>
                <Checkbox onChange={onChangeCheckBox} >
                    без пересадок
                </Checkbox>
              </Space>
            </Col>
            </Row>
            <Row wrap={false} gutter={12}>
                <Col span={3}>КУДА</Col>
                <Col><Input placeholder="Basic usage" onChange={(e)=>setInput2(e.target.value)} value={input2} /></Col>
                <Col span={12}> 
                <Space direction='horizontal'>
                  <DatePicker onChange={onChange2} disabled={chek2}/>
                  <Checkbox onChange={onChangeCheckBox2} >
                    в одну сторону
                  </Checkbox>
                </Space>
                </Col>
            </Row>
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
                      padding: '15px'
                    },
                  },
                }}
              >
                <Button 
                type="primary" 
                size="large" 
                style={{marginTop:'15px'}}
                onClick={()=>{updateData()}} >
                  
                 Найти билет
                </Button>
              </ConfigProvider>
            </Space>
        </Space>
    </>
}