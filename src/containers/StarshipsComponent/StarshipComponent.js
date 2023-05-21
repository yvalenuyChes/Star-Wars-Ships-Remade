import { Button, CircularProgress } from "@mui/material"
import StarsipSelector from "../../components/StarshipSelector/StarshipSelector"

import styles from './styles.module.scss'
import { useState } from "react"

export default function StarshipComponent(){

   const [update, setUpdate] = useState(1)

   const compareHandler = () => {
      const firstSelector = localStorage.getItem('firstSelector')
      const secondSelector = localStorage.getItem('secondSelector')

      const firstStarship = JSON.parse(firstSelector)
      const secondStarship = JSON.parse(secondSelector)

     if(firstStarship.cost_in_credits > secondStarship.cost_in_credits ){
      localStorage.setItem('firstStarshipColorCredits', 'green')
      localStorage.setItem('secondStarshipColorCredits', 'red')
     }else if(
      firstStarship.cost_in_credits === secondStarship.cost_in_credits 
      || firstStarship.cost_in_credits === 'unknown'
      || secondStarship.cost_in_credits === 'unknown'
      ){
      localStorage.setItem('firstStarshipColorCredits', 'gray')
      localStorage.setItem('secondStarshipColorCredits', 'gray')
     }else{
      localStorage.setItem('firstStarshipColorCredits', 'red')
      localStorage.setItem('secondStarshipColorCredits', 'green')
     }

     if(firstStarship.length > secondStarship.length){
      localStorage.setItem('firstStarshipColorLength', 'green')
      localStorage.setItem('secondStarshipColorLength', 'red')
     }else if(
      firstStarship.length === secondStarship.length
      || firstStarship.length === 'unknown'
      || secondStarship.length === 'unknown'
      ){
      localStorage.setItem('firstStarshipColorLength', 'gray')
      localStorage.setItem('secondStarshipColorLength', 'gray')
     }else{
      localStorage.setItem('firstStarshipColorLength', 'red')
      localStorage.setItem('secondStarshipColorLength', 'green')
     }

     if(firstStarship.max_atmosphering_speed > secondStarship.max_atmosphering_speed){
      localStorage.setItem('firstStarshipColorMAS', 'green')
      localStorage.setItem('secondStarshipColorMAS', 'red')
     }else if(
      firstStarship.max_atmosphering_speed === secondStarship.max_atmosphering_speed
      || firstStarship.max_atmosphering_speed === 'unknown'
      || secondStarship.max_atmosphering_speed === 'unknown'
      ){
      localStorage.setItem('firstStarshipColorMAS', 'gray')
      localStorage.setItem('secondStarshipColorMAS', 'gray')
     }else{
      localStorage.setItem('firstStarshipColorMAS', 'red')
      localStorage.setItem('secondStarshipColorMAS', 'green')
     }

     if(firstStarship.crew > secondStarship.crew){
      localStorage.setItem('firstStarshipColorCrew', 'green')
      localStorage.setItem('secondStarshipColorCrew', 'red')
     }else if(
      firstStarship.crew === secondStarship.crew
      || firstStarship.crew === 'unknown'
      || secondStarship.crew === 'unknown'
      ){
      localStorage.setItem('firstStarshipColorCrew', 'gray')
      localStorage.setItem('secondStarshipColorCrew', 'gray')
     }else{
      localStorage.setItem('firstStarshipColorCrew', 'red')
      localStorage.setItem('secondStarshipColorCrew', 'green')
     }

     if(firstStarship.passengers > secondStarship.passengers){
      localStorage.setItem('firstStarshipColorPassengers', 'green')
      localStorage.setItem('secondStarshipColorPassengers', 'red')
     }else if(
      firstStarship.passengers === secondStarship.passengers
      || firstStarship.passengers === 'unknown'
      || secondStarship.passengers === 'unknown'
      ){
      localStorage.setItem('firstStarshipColorPassengers', 'gray')
      localStorage.setItem('secondStarshipColorPassengers', 'gray')
     }else{
      localStorage.setItem('firstStarshipColorPassengers', 'red')
      localStorage.setItem('secondStarshipColorPassengers', 'green')
     }

     if(firstStarship.cargo_capacity > secondStarship.cargo_capacity){
      localStorage.setItem('firstStarshipColorCargoCapacity', 'green')
      localStorage.setItem('secondStarshipColorCargoCapacity', 'red')
     }else if(
      firstStarship.cargo_capacity === secondStarship.cargo_capacity
      || firstStarship.cargo_capacity === 'unknown'
      || secondStarship.cargo_capacity === 'unknown'
      ){
      localStorage.setItem('firstStarshipColorCargoCapacity', 'gray')
      localStorage.setItem('secondStarshipColorCargoCapacity', 'gray')
     }else{
      localStorage.setItem('firstStarshipColorCargoCapacity', 'red')
      localStorage.setItem('secondStarshipColorCargoCapacity', 'green')
     }

     if(firstStarship.consumables > secondStarship.consumables){
      localStorage.setItem('firstStarshipColorConsumables', 'green')
      localStorage.setItem('secondStarshipColorConsumables', 'red')
     }else if(
      firstStarship.consumables === secondStarship.consumables
      || firstStarship.consumables === 'unknown'
      || secondStarship.consumables === 'unknown'
      ){
      localStorage.setItem('firstStarshipColorConsumables', 'gray')
      localStorage.setItem('secondStarshipColorConsumables', 'gray')
     }else{
      localStorage.setItem('firstStarshipColorConsumables', 'red')
      localStorage.setItem('secondStarshipColorConsumables', 'green')
     }

     setUpdate(Date.now())
   }

   return(
      <div className={styles.main_container}>
         <h1>Star wars spaceships </h1>
          <h2>Second film</h2>
          {update
          ?
          <div className={styles.container} >
         
          

         <StarsipSelector
            selectNumber={'firstSelector'}
         />
         <StarsipSelector
            selectNumber={'secondSelector'}
         />
          </div>
         : <CircularProgress/>
          }
        
         <Button 
         style={{margin:'50px auto 0 auto', display:'block'}}
         variant="contained"
         onClick={compareHandler}
         
         >Compare
         </Button>
        
      </div>
      
     
   )
}