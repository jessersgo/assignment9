import React, { useState } from "react";

const Credit = ({ credit, setCredit}) => {
  const [inputDes, setInputDes] = useState('');
  const [inputAmt, setInputAmt] = useState(0);

  function handleInputDes(event) {
    setInputDes(event.target.value);
  }

  function handleInputAmt(event) {
    setInputAmt(event.target.value);
  }

  function updateAmt(event) {
    event.preventDefault();
    // Check if inputAmt is not an empty string
    if (inputAmt !== '') {
      const updatedAmt = parseInt(inputAmt);
      setInputDes('');
      setInputAmt(0);
      setCredit(credit + updatedAmt);
    }
  }

  return (
    <>
      <div id="credit">
        <h1>Add Credit</h1>
        <p>Description</p>
        <input type="text" value={inputDes} onChange={handleInputDes} placeholder="Description"/>
        <p>Add Amount:</p>
        <input type="number" value={inputAmt} onChange={handleInputAmt} placeholder="0"/>
        <button onClick={updateAmt}>Submit</button>
        <h1>Current Credit:</h1>
        <h3>$ {credit}</h3>
      </div>
    </>
  );
}

export default Credit;
