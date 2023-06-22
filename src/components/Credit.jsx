import React from "react"; 


const Credit = ({credit, setCredit, accountBalance}) => {
console.log(credit)
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