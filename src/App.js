import React, {useEffect, useState, props} from "react"; 
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import Credit from "./components/Credit";
import Debit from "./components/Debit";

function App() {
    //since we want the acc balance to be present on all pages i think it should be implemented here
    const [accountBalance, setAccountBalance] = useState(0);
    
    const accBal = () => {
      setAccountBalance(this.debit-this.credit)
    }
    //useEffect(() => {accBal()}), [this.props.credit, this.props.debit])

     
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

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Credit" element={<Credit />} />
          <Route path="/Debit" element={<Debit />} />
        </Routes>
      </div>
      <div>
      <h2>Current Account Balance</h2>
       <h5>$ {accountBalance}</h5>
      </div>
    </Router>
  );
}

export default App;