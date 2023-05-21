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
   starshipImage,
   starshipDataNum
}){


   return(
      <div>
        <ul className={styles.list} >
            <li>Name:  {name}</li>
            <li>Model:  {model}</li>
            <li>Manufacturer:  {manufacturer}</li>

            <li style={{
               color: 
               starshipDataNum === 'firstSelector' 
                  ? localStorage.getItem('firstStarshipColorCredits')
                  : localStorage.getItem('secondStarshipColorCredits')
               }} >Cost in credits:  {costInCredits}</li>

            <li
             style={{
               color: 
               starshipDataNum === 'firstSelector' 
                  ? localStorage.getItem('firstStarshipColorLength')
                  : localStorage.getItem('secondStarshipColorLength')
               }}
            
            >Length:  {length}</li>
            <li
             style={{
               color: 
               starshipDataNum === 'firstSelector' 
                  ? localStorage.getItem('firstStarshipColorMAS')
                  : localStorage.getItem('secondStarshipColorMAS')
               }}
            >Max atmosphering speed: {maxAtmospheringSpeed}</li>
            <li
             style={{
               color: 
               starshipDataNum === 'firstSelector' 
                  ? localStorage.getItem('firstStarshipColorCrew')
                  : localStorage.getItem('secondStarshipColorCrew')
               }}
            >Crew: {crew}</li>
            <li
             style={{
               color: 
               starshipDataNum === 'firstSelector' 
                  ? localStorage.getItem('firstStarshipColorPassengers')
                  : localStorage.getItem('secondStarshipColorPassengers')
               }}
            >Passengers:  {passengers}</li>
            <li
             style={{
               color: 
               starshipDataNum === 'firstSelector' 
                  ? localStorage.getItem('firstStarshipColorCargoCapacity')
                  : localStorage.getItem('secondStarshipColorCargoCapacity')
               }}
            >Cargo capacity:  {cargoCapacity}</li>
            <li
             style={{
               color: 
               starshipDataNum === 'firstSelector' 
                  ? localStorage.getItem('firstStarshipColorConsumables')
                  : localStorage.getItem('secondStarshipColorConsumables')
               }}
            >Consumables:  {consumables}</li>
        </ul>
        {
         starshipImage
         ?
         <div className={styles.starshipImage + ' ' + starshipImage}/>
         : 
         <div className={styles.starshipImage}>
       
         </div>
        }
       
      </div>
   )
}