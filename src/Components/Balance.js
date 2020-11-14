import React, {useContext} from "react";
import { useStyles } from "./Styles";
import { GlobalContext } from "../Context/GlobalState";

export const Balance = () => {
    const classes = useStyles();
    const {transactions} = useContext(GlobalContext);
    const transactionAmounts = transactions.map(transaction => transaction.amount);
    const balance = transactionAmounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    return(
        <>
            <h3 className={classes.Balance}>Your Balance</h3>
            <h2 className={classes.Balance}>${balance}</h2>
        </>
    );
}