import axios from "axios";


export const getUsers = () => axios
    .get(`https://jsonplaceholder.typicode.com/users/`) //
    .then((x) => x.data);

export const getPosts = () => axios
    .get(`https://jsonplaceholder.typicode.com/posts/1`) //
    .then((x) => x.data);

export const  departure_point = 'origin=MOW'

export const getAvisale = () => 
     fetch(`//api.travelpayouts.com/aviasales/v3/prices_for_dates?${departure_point}&destination=DXB&departure_at=2024-06-29&return_at=2024-06-29&unique=false&sorting=price&direct=false&cy=rub&limit=3&page=1&one_way=true&token=a4520e3e1769ac3ff7af39af9faa4c68`,
      {
        method:'get',
     }) 
    .then(response=>response.json())
    .then((x) => x.data);


export const getAvio = ()=> axios
        .get(`//api.travelpayouts.com/aviasales/v3/prices_for_dates?origin=MOW&destination=DXB&departure_at=2024-06-29&return_at=2024-06-29&unique=false&sorting=price&direct=false&cy=rub&limit=3&page=1&one_way=true&token=a4520e3e1769ac3ff7af39af9faa4c68`)
        .then(x=>x.data)


        
export const getProduct = () => 
    axios
    .post('//api.valantis.store:40000',{
            headers:{
                'X-Auth': 'md5("Valantis_20240223")'
            }
        })
    .then((x) => x.data);

export const getProductTest = () => 
   
    fetch('http://api.valantis.store:40000',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                'API-Key': 'md5("Valantis_20240223")',
                'X-Auth': "dsfsdfsdf"
            },
            body: {
                'X-Auth': "dsfsdfsdf"
            }
        })
    .then(response=>response.json())
    .then((x) => x.data);

  