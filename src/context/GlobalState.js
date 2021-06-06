import React , {useReducer, createContext} from 'react';
import AppReducer from "./AppReducer";

const initialState = {
    transactions : [
        { id: 1, name: "Cooking" , amount: 200 },
        { id: 2, name: "Flower" , amount: -40 },
        { id: 3, name: "Cake" , amount: -80 },
        { id: 4, name: "Class" , amount: 100 }
    ]
}
export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }
    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }
    return(
        <GlobalContext.Provider value={{transactions: state.transactions, deleteTransaction, addTransaction}} >
            {children}
        </GlobalContext.Provider>
    )
}
