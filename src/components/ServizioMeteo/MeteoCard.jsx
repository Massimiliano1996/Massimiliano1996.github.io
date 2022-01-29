import React from 'react';
import Data from '../Data';


export default function MeteoCard(prop) {

  const urlImage = `http://openweathermap.org/img/wn/${prop.icon}@4x.png`

  return (
    <>
      <Data />
      <img src={urlImage}></img>
      <h1>{prop.main}</h1>      
      <p>{prop.description}</p>


    </>

  )
}
