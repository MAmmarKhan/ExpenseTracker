import React from "react";
import { useStyles } from "./Styles";


export const Header = () => {
    const classes = useStyles();
    return(
        <h1 className={classes.Heading}>Expense Tracker</h1>
    );
}