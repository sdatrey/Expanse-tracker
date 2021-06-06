import React,{useContext} from 'react';
import {GlobalContext} from "../context/GlobalState";

const IncomeExpanse = () => {
    const { transactions }  = useContext(GlobalContext);
    const amount = transactions.map(transaction => transaction.amount);
    const plus = amount.filter((item) => item>0).reduce((acc,item) => (acc+=item)).toFixed(2);
    const minus = amount.filter((item) => item<0).reduce((acc,item) => (acc+=item)).toFixed(2);
    return (
        <div
        className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p  className="money plus">{plus}$</p>
            </div>
            <div>
                <h4>Expanse</h4>
                <p  className="money minus">{minus}$</p>
            </div>
        </div>
    )
}
export default IncomeExpanse;
