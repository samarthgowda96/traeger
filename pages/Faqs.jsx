import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
    title: {
        color:'black',
        backgroundColor:"#F0FFFF",
        fontWeight:"bold",
        fontSize:"20px"
    },
    desc:{
        textAlign:"justify",
        padding:"20px"
        

    }
  });

const Faqs=({products})=>{
    //Declaring the state to display the description of the FAQ'S
    const [display,setDisplay]= useState(false)
    const classes = useStyles();
    //Rendering all the questions and description
    return(
        
    <TableContainer style={{backgroundColor:"black"}}component={Paper}>
    <Table className={classes.table} size="large" aria-label="a dense table">
      <TableHead>
        <TableRow>
          <TableCell align="center" style={{color:"white",fontSize:"0.5em" }}> <h3 > Commonly asked questions about our Ironwood Series Pellet Grill? </h3><TableCell/>
          </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {products['faqs'].map((faq,idx)=>(
                  <TableRow key={idx} >
                  <TableCell align="center" className={classes.title} onClick={()=>setDisplay(!display)} >
                      <span>{idx+1}.{faq.title}</span>
                      {display&&<div className={classes.desc}>{faq.description}</div>}
                      </TableCell>
                      </TableRow>
            ))}
            </TableBody>
        </Table>
    </TableContainer>
    )
}
export default Faqs;