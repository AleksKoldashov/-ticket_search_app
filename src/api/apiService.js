
export const getTicket = async ({origin, destination, day, day2})=>{
        console.log(day);
        console.log(day2);
        if(day&&day2){
                const response= await fetch(`//api.travelpayouts.com/aviasales/v3/prices_for_dates?origin=${origin}&destination=${destination}&departure_at=${day}&return_at=${day2}&unique=false&sorting=price&direct=false&cy=rub&one_way=true&token=a4520e3e1769ac3ff7af39af9faa4c68`)
                return response.json()  
        }else if(day){
                const response= await fetch(`//api.travelpayouts.com/aviasales/v3/prices_for_dates?origin=${origin}&destination=${destination}&departure_at=${day}&return_at=${day2}&unique=false&sorting=price&direct=false&cy=rub&one_way=true&token=a4520e3e1769ac3ff7af39af9faa4c68`)
                return response.json()   
        }
        
}

export const apiAiroports = async ({input1, input2}) =>{
        const response = await fetch( `https://www.travelpayouts.com/widgets_suggest_params?q=Из%20${input1}%20в%20${input2}`)
        return response.json()
}
// аэропорты огромный json
export const apiAllAiroports = async () =>{
        const response = await fetch( `https://api.travelpayouts.com/data/ru/airports.json`)
        return response.json()
}

export const apiAllCity = async () =>{
        const response = await fetch( `http://api.travelpayouts.com/data/ru/cities.json`)
        return response.json()
}