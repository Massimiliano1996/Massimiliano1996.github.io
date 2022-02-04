import React from 'react';
import Data from '../Data';



export default function MeteoCard(prop) {

  const urlImage = `https://openweathermap.org/img/wn/${prop.icon}@2x.png`

  return (
    <>


      <h2>{prop.city}</h2>
      {!!prop.city
        ? <Data />
        : null}
      {!!prop.icon
        ? <img src={urlImage} alt="Meteo" />
        : null
      }
      <h1>{prop.main}</h1>
      <p>{prop.description}</p>

    </>

  )
}
