import React, {useEffect, useState} from "react"; 
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import Home from "./components/Home";
import Credit from "./components/Credit";
import Debit from "./components/Debit";


function App() {
      //create a state Hook to update debit amt 
      const[ credit, setCredit] = useState(0);
      const[ debit, setDebit] = useState(0);
      const [accountBalance, setAccountBalance] = useState(0);

      //create an async function to call the api
      //useState: used when you want to give a variable a value that would change through 
      //out the whole program, for example, zip code that would keep changing. 
      async function handleCrd(){
        try{
          const result = await axios.get('https://bank-of-react-b745wfs0u-ajlapid718.vercel.app/credits');
          setCredit(result.data);
          console.log(result.data) //this is to see if data it fetched
        } catch(err){
          console.error(err);
          alert('An error Fetching the API Data')
        }

      }
      async function handleDbt(){
        try{
        const result = await axios.get('https://bank-of-react-b745wfs0u-ajlapid718.vercel.app/debits');
        setDebit(result.data);
        } catch(err){
          console.error(err);
          alert('An error Fetching the API Data')
        }
        }

      //useEffect: used when you want to fetch data. for example, make an API request
     //this basically update the value from setCredit into credit with []
      useEffect(() =>{handleCrd()}, [])
      useEffect(() =>{handleDbt()}, [])

      const accBal = () => {
        setAccountBalance(credit-debit)
      }
   
      useEffect(() => {accBal()}, [credit,debit]);


      
    // //since we want the acc balance to be present on all pages i think it should be implemented here
    // 
   
   
    //in the router add the pathway for credit and debit props.credit ....
     
  return (
    <Router>
      <div className="App">
        {/* Navigation */}
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Credit">Credit</Link>
            </li>
            <li>
              <Link to="/Debit">Debit</Link>
            </li>
          </ul>
        </nav>

        {/* Routes help link vars created to the child routers*/}
        <Routes>
          <Route path="/" element={<Home credit={credit} debit={debit} balance={accBal}/>} />
          <Route path="/Credit" element={<Credit credit={credit} debit={debit}/>} />
          <Route path="/Debit" element={<Debit debit={debit} credit={credit}/>} />
        </Routes>
      </div>
      <div>
      <h2>Current Account Balance</h2>
       <h3>$ {accountBalance}</h3>
      </div>
    </Router>
  );
}

export default App;