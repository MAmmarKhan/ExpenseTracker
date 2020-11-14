import {React, useContext } from "react";
import { useStyles } from "./Styles";
import {Paper, Grid, Divider} from '@material-ui/core';
import { GlobalContext } from "../Context/GlobalState";
export const History = () => {

    const {transactions} = useContext(GlobalContext)
    const classes = useStyles();    
    return(
        <>
            <h2 className={classes.leftAlign}>
                History
            </h2>
            <Divider variant="middle"/>
            <div className={classes.ListOfTransactions}>
                <Grid item xs={12} >
                {
                    transactions.map( props => {
                    return(
                        <Paper key={transactions.id} className={classes.Grid}> {props.desc} <span/>${props.amount}</Paper>
                    )
                    })
                }
                </Grid>   
            </div>         
        </>
    );
}