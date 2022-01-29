import { useEffect, useState } from 'react'
import axios from 'axios';
import MeteoCard from '../components/ServizioMeteo/MeteoCard';




export default function Meteo() {
 
  const [data, setData] = useState([]);


  useEffect(() => {
    (async () => {
     const res = await axios.get("http://api.openweathermap.org/data/2.5/weather?q=Rome,Italy&appid=5927eede81005116559ee463a04139b8");
     setData(res.data.weather);
     console.log(res.data.weather)
    })();
   }, []);

 
   const dati=JSON.stringify(data);
   console.log(dati);
  
  return(
    /* [{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}] */
  <>
    
      {
        data.map((item)=>(
          <MeteoCard
          key={item.id}
          main={item.main}
          id={item.id}
          icon={item.icon}
          description={item.description}
          

          />
  ))
      }
    
       
     
    </>

  
  );



  }
  

