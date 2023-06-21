import React, {useEffect, useState} from "react"; 
import axios from "axios";

function Credit() {
    //create a state Hook to update debit amt 
    const[ credit, setCredit] = useState(0);

    //create an async function to call the api
    //useState: used when you want to give a variable a value that would change through 
    //out the whole program, for example, zip code that would keep changing. 
    async function handleCrd(){
        const result = await axios.get('https://bank-of-react-b745wfs0u-ajlapid718.vercel.app/credits');
        setCredit(result.data);
        console.log(result.data) //this is to see if data it fetched
    }
    //useEffect: used when you want to fetch data. for example, make an API request
   //this basically update the value from setCredit into credit with []
    useEffect(() =>{handleCrd()}, [])

  return (
    <>
    <div id = 'content'>
      <h1>Current Credit:</h1>
        <h3>$ {credit}</h3>
  
    </div>
    </>
  );
}

export default Credit;