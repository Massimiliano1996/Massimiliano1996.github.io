import React from 'react';

export default function Data() {

const currentData= new Date();
const dayMonthYear=`${currentData.getDate()}-${currentData.getMonth()+1}-${currentData.getFullYear()}`

  return (

    <h1>Current Day:{dayMonthYear}</h1>

  )
}
