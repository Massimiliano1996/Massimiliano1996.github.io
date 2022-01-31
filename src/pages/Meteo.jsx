import {useState } from 'react'

import MeteoCard from '../components/ServizioMeteo/MeteoCard';
import styled from 'styled-components';
import ApiMeteo from '../components/ServizioMeteo/ApiMeteo';





export default function Meteo() {

  
  const [city, setCity] = useState('');

  const SearchCity = styled.input`
  
  `




  
    
    
  






  return (
    /* [{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}] */
    <>

      <SearchCity value={city} onInput={e => { setCity(e.target.value) }}
      />
      
      <MeteoCard/>
      <ApiMeteo
      city={city}
      />



    </>


  );



}


