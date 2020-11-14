import React, { useContext, useState } from "react";
import { TextField, Button, Divider} from '@material-ui/core';
import { useStyles } from "./Styles";
import { GlobalContext } from "../Context/GlobalState";

  
function AddTransactionComp (){
    const classes = useStyles();    
    let [newDesc, setDesc] = useState("");
    let [newAmount, setAmount] = useState();
    let {addTransaction} = useContext(GlobalContext)
    const handleAddition = (event) => {
        event.preventDefault();
        if (Number(newAmount) === 0) {
            alert("Please enter correct value");
            return false;
        }        
        addTransaction({
            amount: Number(newAmount),
            desc: newDesc
        });
        setDesc('');
        setAmount('');
    }
    return(
        <>   
            <h2 className={classes.leftAlign}>
                Add Transaction
            </h2>          
            <Divider variant="middle"/>
            <form className={classes.root} noValidate onSubmit={handleAddition}>
                <TextField 
                    label="Text" 
                    className={classes.Input} 
                    value={newDesc} 
                    type="text"
                    onChange={(ev) => setDesc(ev.target.value)} 
                    required
                />   
                <TextField 
                    label="Amount"                     
                    className={classes.Input} 
                    value={newAmount}
                    onChange={(ev) => setAmount(ev.target.value)} 
                    type="number"
                    required                        
                />     
                <Button type='submit' variant="contained" color="primary" className={classes.Button} >
                    Add Transaction
                </Button>     
            </form>
        </>
    );
}
export default AddTransactionComp;