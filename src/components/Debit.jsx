import React, {useEffect, useState} from "react"; 
import axios from "axios";
import { Routes, Route, Link } from "react-router-dom";


function Debit() {
    //create a state Hook to update debit amt 
    const[ debit, setDebit] = useState(0);

    //create an async function to call the api
    async function handleDbt(){
        const result = await axios.get('https://bank-of-react-b745wfs0u-ajlapid718.vercel.app/debits');
        setDebit(result.data);
    }
    useEffect(() =>{handleDbt()}, [])

  return (
    <>
    <div id = 'content'>
     <h1>Current Debit:</h1>
        <h3>$ {debit}</h3>

    </div>
    </>
  );
}

export default Debit;