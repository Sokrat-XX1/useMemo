import React, { Component, useEffect, useMemo } from 'react'
import { useState } from 'react';

const Count = () => {
    const [count, setCount] = useState(0);
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(0)
    const [even, setEven] = useState('even')

    function Sum(){
        setCount (Number(value1) + Number(value2));
        console.log('sum');
    }

   
    const getEven = useMemo(()=>{
      if(Number(count) % 2 === 1){
        setEven('Нечетный');
      }
      else{
        setEven('Четный')
      }
      console.log('even');
    },[count]);
   


    return (
      <div>
        <input type="number" value={value1} onChange={event => setValue1(event.target.value)}/>
        <br />
         <input type="number" value={value2} onChange={event => setValue2(event.target.value)}/> 
        <br />
        <button onClick={Sum}>Sum</button>
        <br />
        <h1>{count}</h1>
        <h1>{even}</h1>
      </div>
    )
}

export default Count;