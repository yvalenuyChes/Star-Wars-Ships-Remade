import StarsipSelector from '../StarshipSelector/StarshipSelector'
import styles from './styles.module.scss'

export default function StarsipContainer(){

  return(
   <div className={styles.container} >
      <StarsipSelector/>
     
   </div>
  )
   
}