import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'antd';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import './styles/card.css'
import { apiAllAiroports } from '../api/apiService';


export default function CardTikcet ({data}){
    const queryCache = useQueryClient() 
   
    const {data:allairoport, isPending, isError, error, isSuccess}=useQuery({
        queryKey: ['allairoport'], 
        queryFn: apiAllAiroports,
   
      })
      
   
    //   useEffect(()=>{
    //     if(isSuccess){
    //       queryCache.invalidateQueries({queryKey:['airoports']})
    //     }
    //   },[data, isSuccess])
 const fn1 = () =>{
    const arr =allairoport?.find((item)=>item.code === data.origin_airport )
    return arr
 }   
 const fn2 = () =>{
    const arr =allairoport?.find((item)=>item.code === data.destination_airport)
    return arr
 }   






const styledCard = {
    width: 626,
    marginTop: '25px',
    height: 270,
    // color: '#00a0e9'
    
}



const time = (num)=>{
let a = Math.floor(num/60)
let b = num-a*60
return {a, b}
}
const time_return = (num)=>{
    let a = Math.floor(num/60)
    let b = num-a*60
    return {a, b}
    }
const now_return = new Date(data.return_at)
const yaer_return = now_return.getFullYear()
const month_return = now_return.getMonth()
const day_return = now_return.getDate()
const hours_return = now_return.getHours()
const minutes_return = now_return.getMinutes()


const now = new Date(data.departure_at)
const yaer = now.getFullYear()
const month = now.getMonth()
const day = now.getDate()
const hours = now.getHours()
const minutes = now.getMinutes()

const time2=()=>{
    let c = hours + time(data.duration_to).a
    let d = minutes + time(data.duration_to).b
if(d>60){
        c = c+1
        d = d-60
    return {c, d}
}

    return {c,d}
    }

 const time2_return=()=>{
        let c = hours + time_return(data.duration_back).a
        let d = minutes + time_return(data.duration_back).b
    if(d>60){
            c = c+1
            d = d-60
        return {c, d}
    }
    
        return {c,d}
        }

if (isPending) {
    <p>Loading ....</p>
  }
  if (isError) {
    <p>{error.message}Error....</p>
  }
return<>
  <Card
    bordered={true}
    style={styledCard}
  >
    <Row span={3}>
      <Col span={8}><p className='price_card'>{data.price}</p></Col>
      <Col span={2} push={12}><img alt='logo' src={`https://pics.avs.io/100/50/${data.airline}.png`}/></Col>
    </Row>
    <Row>
      <Col span={8}>аэропорт {fn1()?.name} {data.flight_number}</Col>
      <Col span={8}>Количество пересадок: {data.transfers}</Col>
      <Col span={8}>аэропорт{fn2()?.name}</Col>
    </Row>
    <Row>
      <Col span={8}>вылет {day}-{month+1}-{yaer}</Col>
      <Col span={8}>время в пути</Col>
      <Col span={8}>прилет{day}-{month+1}-{yaer}</Col>
    </Row>
    <Row>
      <Col span={8}>
      {hours}:{minutes.toString().padStart(2,'0')}
      </Col>
      <Col span={8}>{time(data.duration_to).a}ч.{time(data.duration_to).b.toString().padStart(2,'0')}м.</Col>
      <Col span={8}>{time2(data.duration_to).c}ч.{time2(data.duration_to).d.toString().padStart(2,'0')}м.</Col>
    </Row>
    {
        data.duration_back !== 0 ?
        <>
    <hr/>
        <p>Обратно</p>
    <Row>
      <Col span={8}>аэропорт {fn2()?.name} {data.flight_number}</Col>
      <Col span={8}>Количество пересадок: {data.transfers}</Col>
      <Col span={8}>аэропорт{fn1()?.name}</Col>
    </Row>
    <Row>
      <Col span={8}>вылет {day_return}-{month_return+1}-{yaer_return}</Col>
      <Col span={8}>время в пути</Col>
      <Col span={8}>прилет{day_return}-{month_return+1}-{yaer_return}</Col>
    </Row>
    <Row>
      <Col span={8}>
      {hours_return}:{minutes_return.toString().padStart(2,'0')}
      </Col>
      <Col span={8}>{time_return(data.duration_back).a}ч.{time_return(data.duration_back).b.toString().padStart(2,'0')}м.</Col>
      <Col span={8}>{time2_return(data.duration_back).c}ч.{time2_return(data.duration_back).d.toString().padStart(2,'0')}м.</Col>
    </Row>
        
        </>
      :
    null
    }
    
  </Card>
    </>
}