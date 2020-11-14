import React from "react";
import { useStyles } from "./Styles";
const Signature = () => {
    const classes = useStyles();
    return(
        <footer className={classes.Signature}> Made By Foxy ©</footer>
    )
}
export default Signature;