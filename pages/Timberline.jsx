import { makeStyles } from "@material-ui/core/styles";
import Faqs from './Faqs'
const useStyles = makeStyles({
    main: {
        height: "400px",
        width: "100vw",
        backgroundColor:"azure"
      },
  
    box:{ 
        height: "400px",
        width: "100vw",
        backgroundColor:"black",
    }
});
const Timberline=({newproducts,products})=>{
    const classes = useStyles();
    
    return(
        //Rendering Timberline Details
       <>
        <div className={classes.main}>
            
            <h1 style={{textAlign:"center", fontSize:"1em", color:"#ff8c00",padding:"25px"}}>{newproducts[0]["toutContent"].heading}</h1>
            <p style={{textAlign:"center",fontSize:"0.45em",color:"#ff8c00",padding:"15px"}}>{newproducts[0]["toutContent"].description}</p>

        
        </div>
            <div className={classes.box}>
                <span style={{textAlign:"center", fontSize:"1em", color:"#ff8c00", marginTop:"40px"}}>{newproducts[1]["toutContent"].heading}</span>
                    <br></br>
                <span style={{textAlign:"center", fontSize:"0.6em", color:"white" ,padding:"15px"}}>{newproducts[1]["toutContent"].lilHeading}</span>
                    <br></br>
                <span style={{textAlign:"center", fontSize:"0.45em", color:"#ff8c00",padding:"2em"}}>{newproducts[1]["toutContent"].description}</span>
            </div>
            <Faqs products={products[4]}/>
         </>
      
    )
}
export default Timberline;