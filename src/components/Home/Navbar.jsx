import styled from 'styled-components'



import React from 'react'

export default function Navbar() {

const MyNav=styled.div`

display:flex;
background-color:black;
height:2rem;
color:white;
justify-content:space-around;
text-decoration:bold;

`




    return (
        <MyNav>
            <span>Servizio Meteo</span>
            <span>Servizio Geolocalizzazione</span>




        </MyNav>
    )
}
