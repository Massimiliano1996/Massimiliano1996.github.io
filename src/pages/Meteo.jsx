import { useEffect, useState } from 'react'
import axios from 'axios';
import MeteoCard from '../components/ServizioMeteo/MeteoCard';




export default function Meteo() {

  const [data, setData] = useState([]);




  useEffect(() => {
    (async () => {
      try{const res = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=Torrevieja&appid=5927eede81005116559ee463a04139b8`);
      return res.data;
    }catch(errors){
      console.log(errors);
    }

      

    })().then((res)=>setData(res));
  }, []);
  console.log(data)
  

  /* (async () => {
    try {
      const response = await axios.get(${BASE_URL}/latest?api_key=${apiKey});
      return response.data;
    } catch (errors) {
      console.error(errors);
    }
  })().then((res) => domInjection(res)); // "spacchetto" la promessa passandola ad una CALLBACK per il rendering nel DOM
 */




  return (
    /* [{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}] */
    <>

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


