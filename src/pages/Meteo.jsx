import { useState } from 'react'
import MeteoCard from '../components/ServizioMeteo/MeteoCard';
import ApiMeteo from '../components/ServizioMeteo/ApiMeteo';





export default function Meteo() {

const[input,setInput] =useState('')
  const[city, setCity] = useState('');

  /* const SearchCity = styled.input`
  
  `
 */

  return (
    /* [{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}] */
    <>
      <form>
        <input type="text" onChange={e=>setInput(e.target.value)}
        />
        <input type="submit"  onSubmit={e=>setCity(input)} />
      </form>
      <MeteoCard />
      {!city || city === ''
        ? null
        : <ApiMeteo
          city={city}
        />

      }



    </>


  );



}


