import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
    root: {    
      margin: 0,
    },
    Paper:{
      height: 'auto',
      width: '60vh',
      margin: 'auto',
      textAlign: 'center',
      backgroundColor: '#64b5f6'
    },
    Input: {
      width: '80%',    
    },
    Heading:{
      paddingTop: 7,
      marginBottom: 7,
    },
    Balance:{
      paddingLeft: 25,
      textAlign: 'left',
      margin: 5
    },
    leftAlign:{
      paddingLeft: 25,
      textAlign: 'left',
      margin: 5,
      marginTop: 8,
      marginBottom:2,
    },
    Button:{
      marginTop: 10,
      backgroundColor:'#49599a',
      width: '80%',
      marginBottom: 10,
    },
    card:{
      display: 'flex',
      justifyContent: 'space-evenly',
      margin: 'auto',
      lineHeight: 1,
      width: '85%',
      marginTop: 1,
      borderRadius: '10px',
    },
    Grid: {
        justifyContent: 'space-between',
        display: 'flex',      
        padding: 9,
        margin: 'auto',
        marginTop: 3,
        lineHeight: 1,
        width: '80%',        
    },
    RedMoney:{
      color: 'Red'
    },
    GreenMoney:{
      color: 'Green'
    },
    ListOfTransactions:{      
      maxHeight:'22vh',
      overflowY:'scroll', 
      overflowX:'hidden',      
    },
    Signature:{
      fontFamily: 'Apple Chancery, cursive'
    }
  }));