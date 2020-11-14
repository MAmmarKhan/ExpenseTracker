import React from "react";
import {Paper} from '@material-ui/core';
import { useStyles } from "./Components/Styles";

//Import Components
import AddTransaction from "./Components/AddTransaction";
import { Header } from "./Components/Header";
import { Balance } from "./Components/Balance";
import { History } from "./Components/History";
import { Summary } from "./Components/Summary";
import { GlobalProvider } from "./Context/GlobalState";
import Signature from "./Components/Signature";

function ExpenseTracker() {  
  
  const classes = useStyles();
  return (     
    <GlobalProvider>
        <div className={classes.root}>
        <Paper elevation={3} className={classes.Paper}>
            <Header></Header>
            <Balance></Balance>
            <Summary></Summary>                
            <History></History>               
            <AddTransaction></AddTransaction>
        </Paper>
        <Signature></Signature>
        </div>        
    </GlobalProvider>
  );
}

export default ExpenseTracker;
