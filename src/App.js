import './App.css';
import Header from "./components/Header";
import React from "react";
import Balance from "./components/Balance";
import IncomeExpanse from "./components/IncomeExpense";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import {GlobalProvider} from "./context/GlobalState";

function App() {
  return (

          <GlobalProvider>
              <Header />
              <div className="container">
                  <Balance />
                  <IncomeExpanse />
                  <TransactionList />
                  <AddTransaction />
              </div>
          </GlobalProvider>

  );
}

export default App;
