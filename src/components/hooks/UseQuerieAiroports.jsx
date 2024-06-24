import { useQuery} from "@tanstack/react-query"
import { apiAiroports} from "../../api/apiService"





export default function UseQuerieAiroports ({input1, input2}) {
   
    const {data, isPending, isError, error, isSuccess}=useQuery({
        queryKey: ['airoports'], 
        queryFn: ()=>apiAiroports({input1, input2}),
        enabled:true
      })
      

      
      if (isPending) {
        <p>Loading ....</p>
      }
      if (isError) {
        <p>{error.message}Error....</p>
      }
    return {data,isSuccess}
}