import React, { createContext, useReducer } from "react";
import TransactionReducer from "./TransactionReducer";

const initialState = {
    transactions: [
    { amount: 500, desc: "Cash" },
    { amount: -50, desc: "Cold Drink" },
    { amount: 100, desc: "Deposit" },
    { amount: -200, desc: "Utility Bill" },
    { amount: -200, desc: "Utility Bill" },
]
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children})=> {
    let [state, dispatch] = useReducer(TransactionReducer, initialState);

    function addTransaction(transObj){
        dispatch({
            type: "ADD_TRANS",
            payload: { 
                amount: transObj.amount, 
                desc: transObj.desc 
            },            
        })
    }
    return(
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            addTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    );
}

/*
        function delTransaction(id) {
            dispatch({
                type: 'DELETE_TRANSACTION',
                payload: id
            });
        }

        // Add New Transaction Action
        function addTransaction(transaction) {
            dispatch({
                type: 'ADD_TRANSACTION',
                payload: transaction
            })
        }
*/
