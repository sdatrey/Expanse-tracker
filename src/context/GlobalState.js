import React , {useReducer, createContext} from 'react';

const initialState = {
    Transaction : [
        {id: 1, name: "Cooking" , amount: 200},
        {id: 2, name: "Flower" , amount: -40},
        {id: 3, name: "Cake" , amount: -80},
        {id: 4, name: "Class" , amount: 100}
    ]
}
export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    return(
        <GlobalContext.Provider value={{transaction: state.transactons}} >
            {children}
        </GlobalContext.Provider>
    )
}
