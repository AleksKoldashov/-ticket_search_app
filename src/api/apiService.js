// Cамые дешевые авиабилеты на определённые даты
export const getTicket = async ({origin, destination, day, day2,chek2, chek})=>{
   console.log('город вылета',origin);
   console.log('город прилета',destination);
   console.log("день вылета",day);
   console.log("обратный вылет день",day2);
   console.log("в одну сторону",chek2);
   console.log("без пересадок",chek);
                // все билеты туда обратно на эти даты
                const response= await fetch(`https://api.travelpayouts.com/aviasales/v3/prices_for_dates?origin=${origin}&destination=${destination}&departure_at=${day}&return_at=${day2}&unique=false&sorting=price&direct=${chek}&cy=rub&limit=30&page=1&one_way=${chek2}&token=a4520e3e1769ac3ff7af39af9faa4c68`,
                        {
                            
                               headers: {
                                "Accept-Encoding": "gzip, deflate",
                               }
                        }
                )
                return response.json()  
      
   
        
        
}
//аэропорты для поиска
export const apiAiroports = async ({input1, input2}) =>{
        const response = await fetch( `https://www.travelpayouts.com/widgets_suggest_params?q=Из%20${input1}%20в%20${input2}`,
                {
                        headers: {
                         "Accept-Encoding": "gzip, deflate"
                        }
                 }
        )
        return response.json()
}


