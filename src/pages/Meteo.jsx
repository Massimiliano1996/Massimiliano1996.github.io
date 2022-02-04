import { useState } from 'react'
import MeteoCard from '../components/ServizioMeteo/MeteoCard';
import ApiMeteo from '../components/ServizioMeteo/ApiMeteo';
import styled from 'styled-components'

const MyForm = styled.form`
display: flex;
justify-content: center;
width:100%;

`
const MyInput = styled.input`
--x: 50%;
	--y: 50%;
	
	position: relative;
	appearance: none;
	padding: 1em 2em;
	color: white;
	cursor: pointer;
	outline: none;
	border-radius: 100px;
	
	
	border: 2px solid transparent;
	background: linear-gradient(#000, #000) padding-box, radial-gradient(farthest-corner at var(--x) var(--y), #131414, #dbe5af) border-box;

`
const MyButton = styled.input`
--x: 50%;
	--y: 50%;
	
	position: absolute;
	appearance: none;
	padding: 1em 2em;
	color: white;
	cursor: pointer;
	outline: none;
	border-radius: 100px;
	
  right: 25%;
  transform:translate -50%;
	
	border: 2px solid transparent;
	background: linear-gradient(#000, #000) padding-box, radial-gradient(farthest-corner at var(--x) var(--y), #131414, #dbe5af) border-box;


`



export default function Meteo() {

  const [input, setInput] = useState('')
  const [city, setCity] = useState('');

  /* const SearchCity = styled.input`
  
  `
 */
  



  return (
    /* [{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}] */
    <>
      <MyForm onSubmit={e => { e.preventDefault(); setCity(input) }}>
        <MyInput id="searchCity" type="text" onChange={e => setInput(e.target.value)} placeholder="...SearchCity" onMouseMove={(e) => {

          const x = e.pageX - e.target.offsetLeft
          const y = e.pageY - e.target.offsetTop

          e.target.style.setProperty('--x', `${x}px`)
          e.target.style.setProperty('--y', `${y}px`)

        }} onPress={e =>{

          const x = e.pageX - e.target.offsetLeft
          const y = e.pageY - e.target.offsetTop

          e.target.style.setProperty('--x', `${x}px`)
          e.target.style.setProperty('--y', `${y}px`)
}}
        />
        <MyButton type="submit" value='Search' onMouseMove={(e) => {

const x = e.pageX - e.target.offsetLeft
const y = e.pageY - e.target.offsetTop

e.target.style.setProperty('--x', `${x}px`)
e.target.style.setProperty('--y', `${y}px`)

}} />
      </MyForm>
      <MeteoCard />
      {!city || city === ''
        ? null
        : <ApiMeteo
          city={city}
        />


      }



    </>


  )



}


