import React from 'react'
import ApiMeteo from '../components/ServizioMeteo/ApiMeteo';
import { useEffect } from 'react'


export default function Meteo() {






  const meteoClient = ApiMeteo();
  useEffect(() => {
    meteoClient.fetchMeteo()
    console.log(meteoClient);

  }, [])



  return (
    <>


    </>
  )
}
