import { useQuery} from "@tanstack/react-query";
import { getTicket } from '../../api/apiService';





export default function FilterAirline(){

const ticket =useQuery({
        queryKey: ['ticket'], 
        queryFn:getTicket,
        select: data=>data.data,
        enabled: true
      })

  let arr = []
  for(let i=0;i<ticket.data?.length;i++){
    arr.push(ticket.data[i]?.airline)
  }
  let map = new Map();
  for (let elem of arr) {
      let counter = map.get(elem);
      map.set(elem, counter ? counter + 1 : 1);
  }
  let res = [];
  for (let [elem, counter] of map.entries())
      if (counter >= 1)
          res.push(elem);

  return res
  }