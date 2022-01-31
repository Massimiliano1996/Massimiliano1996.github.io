import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import MeteoCard from './MeteoCard';

export default function ApiMeteo(prop) {


    const [data, setData] = useState([]);


    useEffect(() => {
        (async () => {
          try {
            
            const res = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=Roma&appid=5927eede81005116559ee463a04139b8`);
            return res.data.weather;
          } catch (errors) {
            console.log(errors);
          }
  
  
  
        })().then((res) => setData(res));
      }, []);






  return (
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

  };
  </>
  )
}
