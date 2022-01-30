import { useEffect, useState } from 'react'
import axios from 'axios';
import MeteoCard from '../components/ServizioMeteo/MeteoCard';
import styled from 'styled-components';





export default function Meteo() {

  const [data, setData] = useState([]);
const[city,setCity]=useState();

  const SearchCity=styled.input`
  
  `




  useEffect(() => {
    (async () => {
      try{const res = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=Roma&appid=5927eede81005116559ee463a04139b8`);
      return res.data.weather;
    }catch(errors){
      console.log(errors);
    }

      

    })().then((res)=>setData(res));
  }, []);
  console.log(data)

  

  


  return (
    /* [{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}] */
    <>
    
    <SearchCity value={city} onInput={e=>setCity(e.target.city)}/>
      {
        
        data.map((item) => (
          <MeteoCard
            icon={item.icon}
            key={item.id}
            main={item.main}
            id={item.id}
            description={item.description}
            

          />
        ))

      }



    </>


  );



}


