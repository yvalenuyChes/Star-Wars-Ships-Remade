import { Button } from "@mui/material"
import StarsipContainer from "../../components/StarshipContainer/StarshipContainer"
import styles from './styles.module.scss'

export default function StarshipComponent(){
   return(
      <div className={styles.main_container}>
         <h1>Star wars spaceships </h1>
          <h2>Second film</h2>
          <div className={styles.container} >
        
         <StarsipContainer/>
         <StarsipContainer/>
       
         </div>
         <Button style={{margin:'50px auto 0 auto', display:'block'}} variant="contained" >Сравнить</Button>
        
      </div>
      
     
   )
}