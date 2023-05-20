
import { CircularProgress } from '@mui/material'
import styles from './styles.module.scss'

export default function StarshipData({
   name,
   model,
   manufacturer,
   costInCredits,
   length,
   maxAtmospheringSpeed,
   crew,
   passengers,
   cargoCapacity,
   consumables,
   starshipImage
}){


   return(
      <div>
        <ul className={styles.list} >
            <li>Name:  {name}</li>
            <li>Model:  {model}</li>
            <li>Manufacturer:  {manufacturer}</li>
            <li>Cost in credits:  {costInCredits}</li>
            <li>Length:  {length}</li>
            <li>Max atmosphering speed: {maxAtmospheringSpeed}</li>
            <li>Crew: {crew}</li>
            <li>Passengers:  {passengers}</li>
            <li>Cargo capacity:  {cargoCapacity}</li>
            <li>Consumables:  {consumables}</li>
        </ul>
        {
         starshipImage
         ?
         <div className={styles.starshipImage + ' ' + starshipImage}/>
         : 
         <div className={styles.starshipImage}>
         <CircularProgress/>
         </div>
        }
       
      </div>
   )
}