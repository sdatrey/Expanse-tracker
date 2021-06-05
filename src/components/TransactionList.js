import React from 'react';

const TransactionList = () =>{
    return(
        <div>
            <h4>History</h4>
            <ul className="list" >
                <li className="minus">
                    Cash<span>-$400</span>
                    <button className="delete-btn">x</button>
                </li>
            </ul>
        </div>
    )
}
export default TransactionList;
