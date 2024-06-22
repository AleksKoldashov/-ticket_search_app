import { useQuery, useQueryClient } from "@tanstack/react-query"
import { apiAiroports, getTicket } from "../../api/apiService"
import { useEffect } from "react"




export default function UseQuerieAiroports ({input1, input2}) {
   

    const queryCache = useQueryClient() 
   
    const {data, isPending, isError, error, isSuccess}=useQuery({
        queryKey: ['airoports'], 
        queryFn: ()=>apiAiroports({input1, input2}),
   
      })
      
   
   
      useEffect(()=>{
        if(isSuccess){
          queryCache.invalidateQueries({queryKey:['airoports']})
        }
      },[data, isSuccess])
      
      if (isPending) {
        <p>Loading ....</p>
      }
      if (isError) {
        <p>{error.message}Error....</p>
      }
    return {data}
}