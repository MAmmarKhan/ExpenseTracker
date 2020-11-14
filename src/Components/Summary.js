import React, {useContext} from "react";
import { useStyles } from "./Styles";
import {Card} from '@material-ui/core';
import { GlobalContext } from "../Context/GlobalState";

export const Summary = () => {
    const classes = useStyles();
    const {transactions} = useContext(GlobalContext)
    const transactionAmounts = transactions.map(transaction => transaction.amount)
    const income = transactionAmounts
    .filter(transaction => transaction > 0)
    .reduce((acc, transaction) => (acc += transaction), 0)
    .toFixed(2);

    const expense = Math.abs(transactionAmounts
    .filter(transaction => transaction < 0)
    .reduce((acc, transaction) => (acc += transaction), 0)
    ).toFixed(2);

    return(
        <>
            <h2 className={classes.leftAlign}>
                Summary
            </h2>            
            <Card className={classes.card} variant="outlined">
                <div><h3>INCOME</h3><h2 className={classes.GreenMoney}> ${income}</h2></div>
                <div><h3>EXPENSE </h3><h2 className={classes.RedMoney}> ${expense}</h2></div>
            </Card>
        </>
    );
}