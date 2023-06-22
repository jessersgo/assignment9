import React, { useState } from "react"; 

const Debit=({debit, setDebit, accountBalance}) => {
    const [inputDes, setInputDes] = useState('');
    const[inputAmt, setInputAmt] = useState(0);

    function handleInputDes(event){
        setInputDes(event.target.value)
    }

    function handleInputAmt(event){
        setInputAmt(event.target.value)
    }

    function updateAmt(event){
        event.preventDefault();
        //check to make sure there are no empty strings
        let updatedAmt ={       
        "description": inputDes,
        "amount": inputAmt
       // debit: debit+inputAmt
        }
    }

  return (
    <>
    <div id = 'debit'>
     <h1>Add Debit</h1>
     <p>Description</p>
     <input type="text" value={inputDes} onChange={handleInputDes} />
     <p>Add Amount:</p>
      <input type="number" value={inputAmt} onChange={handleInputAmt} />
      <button onClick={updateAmt}>Submit</button>
     <h1>Current Debit:</h1>
        <h3>$ {debit}</h3>
    </div>
    </>
  );
}

export default Debit;
//i might change it to a forms

