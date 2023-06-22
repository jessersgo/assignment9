import React from "react"; 

const Debit=({debit, setDebit, accountBalance}) => {

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