import { useQuery } from "@tanstack/react-query";
import { getTicket } from "../../api/apiService";


export default function FilterTicket () {

    const ticket =useQuery({
        queryKey: ['ticket'], 
        queryFn:getTicket,
        select: data=>data.data,
        enabled: true
      })
        let res = []
        
      if(ticket?.data){
        let map = new Map();
        for (let elem of ticket?.data) {
            let counter = map.get(elem.flight_number);
            map.set(elem.flight_number, counter ? counter + 1 : 1);
        }
        let arr = [];
        for (let [elem, counter] of map.entries())
            if (counter >= 1){
              arr.push(elem);
            }
        let res = []
        for(let i=0;i<arr.length;i++){
          let a = ticket?.data.find((item)=>item.flight_number===arr[i])
          res.push(a)
        }
        return res
      }
 

    return  res 
}