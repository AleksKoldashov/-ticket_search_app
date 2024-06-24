import React from 'react';
import './App.css';
import { useQuery} from '@tanstack/react-query';
import { getTicket } from './api/apiService';
import CardTikcet from './components/Card';
import FormQueries from './components/UI/FormQueryies';
import FilterAirline from './components/UI/FilterAirline';
import FilterTicket from './components/UI/FilterTicket';






function App() {


const filterairline = FilterAirline()


const ticket =useQuery({
  queryKey: ['ticket'], 
  queryFn:getTicket,
  select: data=>data.data,
  enabled: true
})

const filterF_Number = FilterTicket()


  return (
    <div className='App'>
     
          <FormQueries/> 
            <div className='content'>
            {
               filterF_Number?.length ?
               <div  style={{display:'flex',flexDirection:'row',}} onClick={()=>{console.log('ticket');}}>{
                filterairline?.map((item, index)=><img key={index} alt='air' src={`https://pics.avs.io/100/50/${item}.png`} style={{ marginLeft:'15px'}}/>)
               }</div>
               :
               null
            }
            { 
                ticket.isPending ? <p>Loading...</p>
                :
                ticket.isError ? <h1>пока нет данных</h1> :
                filterF_Number ? 
                filterF_Number.map((card, index)=><CardTikcet data={card} key={index}/>)
                :
                <p>No data</p>
            }          
            </div>
            
    </div>
  );
}

export default App;
