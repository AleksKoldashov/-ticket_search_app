import { useQuery } from "@tanstack/react-query";
import { Space, Checkbox  } from "antd";
import { GroupCheap } from "../../api/apiService";
import { useState } from "react";

export default function useFilterTickets () {
const [cheked, setCheked] = useState(false)


    const onChange = (e) => {
        setCheked(e.target.checked)
      };

      const check_prise =()=>{
        return <>
          <Space direction='vertical'>
            <Checkbox onChange={onChange}>Checkbox</Checkbox>;
          </Space>
                </>
      }

    return{check_prise, cheked}
}