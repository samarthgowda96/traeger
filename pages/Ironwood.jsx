import { route } from "next/dist/next-server/server/router"
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button"
import Faqs from './Faqs'
const useStyles = makeStyles({
    root: {
      width: "100vw",
      height: "500px",
      textAlign: "center",
      verticalAlign: "middle",
      cursor: "context-menu",
      marginTop: "21em", 
      backgroundColor: "#2f4353",
      backgroundImage: "linear-gradient(315deg, #2f4353 0%, #d2ccc4 74%)",
      boxShadow:
        "0 -1px 4px 0 rgba(25,32,36,0.04), 0 3px 6px 0 rgba(25,32,36,0.16)",
      "&:hover": {
        borderColor: "#564345"
      }
    },
    bullet: {
      display: "inline-block",
      margin: "0 2px",
      transform: "scale(0.8)"
    },
    title: {
      fontSize: "40px",
      textAlign: "right",
      marginTop: "20px",
      fontFamily: "Helvetica",
      fontWeight: "bold",
      color: "#192024",
      display:"inline-block",
      marginLeft:""
    },
    pos: {
      marginBottom: "12px"
    },
    flexbox: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      margin: "-10px 0 0 -10px"
    },
    box: {
      display: "flex",
      flexDirection: "row",
      textAlign:"center", 
      height: "fit-content"
    },
    main: {
      height:"fit-content"   
    },
    image: {
        display: "inline-block",
        marginRight:"4em",
        marginTop:"1.5em",
        
    },
    imgcont:{
      marginLeft:"0%",
      marginRight:"10em",
      boxShadow:
      "0 -1px 4px 0 rgba(25,32,36,0.04), 0 3px 6px 0 rgba(25,36,36,0.16)"
    },
    imgItem: {
    
      width:"1em",
      height:"1em"
    },
    desc:{
    backgroundColor:"azure",
    alignItems:"left",
    border:"5px solid red"
    },
    flexboxCont:{
      display: 'flex',

      height: '350px',
      backgroundColor: 'black',
      justifyContent:'space-evenly',
    },
    flexboxItem:{
    
      margin:'10px',
      height:"fit-content",
      textAlign: 'left',
      marginBottom:"2em",
      justifyContent:'space-evenly'
  },
  flexboxItem1:{
      fontSize:"0.7em",
      flexShrink: '0',
      textAlign:"left",  
  },
  flexboxItem2:{
    fontSize: "0.5em"
  },
  foodTitle: {
    justifyContent:'space-evenly',
    marginLeft:'1em',
    fontSize:"0.6em"
  } 
  });

const Ironwood=({newproducts,products})=>{
    const classes = useStyles();
   //Rendering Ironwood UI
    return(
      <>
       <div className={classes.main}>
        <Card
              className={classes.root}
              variant="outlined"
             >
              <CardContent >
                <div className={classes.image}>
                  {newproducts&&
                    <img 
                    style={{"width":"250px", "height":"230px"}}
                  src={newproducts[0]['images'][1].url}/>
                  }
                  </div>
                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                  >
                    {newproducts[0]['_meta'].name.toUpperCase()}
                    <br></br>
                    <div style={{color:"white"}}>
                      ${newproducts[0]['productData']["price"]} 
                    </div>
              
                    <Button 
                    style={{
                        "backgroundColor": "#7cffcb",
                        "backgroundImage":"linear-gradient(315deg, #7cffcb 0%, #74f2ce 74%",
                        "height":"3em", 

                        }}>
                        ADD TO CART
                  </Button>
              </Typography>
              
            </CardContent>
        </Card> 
        <div className={classes.flexboxCont}>
          <div className={classes.flexboxItem}>
              <span className={classes.flexboxItem1}>{newproducts[0]['productData']["grillSeries"]}</span>
              <br></br>
              <span className={classes.flexboxItem2} >{newproducts[1]['toutContent']['toutContent']['description']}</span>
           </div>
            <div className={classes.flexboxItem}>
              <img 
                style={{"width":"270px", "height":"270px"}}
                src={newproducts[1]['exteriorImage'].url}/>
             </div>
        </div>
        <div className={classes.flexboxCont}>
              <div className={classes.flexboxItem}>
                <h3 style={{textAlign:"center", fontSize:"1em", color:"#ff8c00"}}>Capacity</h3>
                {newproducts[1].grillCapacity.map(cap=>{
                  return <span className={classes.foodTitle}>{cap.foodTitle} - {cap.amount}</span>
                })} 
              </div>
            </div>
            <div style={{display:"inline-block"}}>
              <span className={classes.foodTitle}>Total Cooking Space : {newproducts[1].totalCookingSpace}</span><br></br>
              <span className={classes.foodTitle}>Total weight : {newproducts[1].totalWeight}</span><br></br>
              <span className={classes.foodTitle}>Pellet hopper capacity : {newproducts[1].pelletHopperCapacity}</span><br></br>
              <span className={classes.foodTitle}>Max temperature : {newproducts[1].maxTemp}</span><br></br>
            </div>
            <div>
            <Faqs products={products[4]}/>
            </div>
        </div>    
      </>
    )
}
export default Ironwood