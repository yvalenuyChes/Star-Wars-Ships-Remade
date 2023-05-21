
import { useEffect, useState } from 'react'
import axios from 'axios'
import {  CircularProgress, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import styles from './styles.module.scss'
import StarshipData from '../StarshipData/StarshipData'


export default function StarsipSelector({selectNumber}){


   const [allStarships, setStarships] = useState([])

   const [selectStarshipName, setSelectStarshipName] = 
   useState(localStorage.getItem(selectNumber) ? JSON.parse(localStorage.getItem(selectNumber)).name  :  null)

   const [selectStarship, setSelectStarship] = useState(null)

   const handleChange = event => {
      setSelectStarshipName(prev => event.target.value)
      localStorage.setItem(selectNumber, event.target.value)
      localStorage.removeItem('firstStarshipColorCredits')
      localStorage.removeItem('secondStarshipColorCredits')
      localStorage.removeItem('firstStarshipColorLength')
      localStorage.removeItem('secondStarshipColorLength')
      localStorage.removeItem('firstStarshipColorMAS')
      localStorage.removeItem('secondStarshipColorMAS')
      localStorage.removeItem('firstStarshipColorCrew')
      localStorage.removeItem('secondStarshipColorCrew')
      localStorage.removeItem('firstStarshipColorPassengers')
      localStorage.removeItem('secondStarshipColorPassengers')
      localStorage.removeItem('firstStarshipColorCargoCapacity')
      localStorage.removeItem('secondStarshipColorCargoCapacity')
      localStorage.removeItem('firstStarshipColorConsumables')
      localStorage.removeItem('secondStarshipColorConsumables')

      if(allStarships){
         allStarships.map(starship => {
        
            if(starship.name === event.target.value){
               setSelectStarship(prev => starship)
               localStorage.setItem(selectNumber, JSON.stringify(starship))
            }
            
         })
      }
   }


      useEffect(() => {
         let starships = []
         axios.get('https://swapi.dev/api/films/5/')
         
         .then(data => data.data.starships.map(link => {
            axios.get(link)
   
            .then(data => {
               starships.push(data.data)
            })
            .finally(() => {
               setStarships(prev => [ ...starships])
            })
           
         }))
   
         .catch(err => console.log(err))
   }, [])

   return(
      <div className={styles.container} >
         {
            allStarships.length > 8
            ?
            <>
              <FormControl>
               <InputLabel>Starship</InputLabel>
               <Select
                  style={{width:'300px', }}
                  value={selectStarshipName}
                  label='Starship'
                  onChange={handleChange}
               >

              {
               allStarships.length > 8 ||  allStarships !== null
               ?
               allStarships.map((starship, key) => {
                  return(
                     <MenuItem key={key} value={starship.name} >{starship.name} </MenuItem>
                  )
                 
               })

               : null
              
              }
            </Select>
            </FormControl>
               <StarshipData
                  name={
                     selectStarshipName
                     ?
                       selectNumber === 'firstSelector'
                        ?JSON.parse(localStorage.getItem('firstSelector')).name 
                        :JSON.parse(localStorage.getItem('secondSelector')).name 
                     : ''
                  }
                  model = { selectStarshipName 
                     ?  
                        selectNumber === 'firstSelector'
                        ?  JSON.parse(localStorage.getItem('firstSelector')).model 
                        :  JSON.parse(localStorage.getItem('secondSelector')).model 
                  : ''
                  }
                  manufacturer = { 
                     selectStarshipName 
                     ? 
                        selectNumber === 'firstSelector'
                        ?  JSON.parse(localStorage.getItem('firstSelector')).manufacturer 
                        :  JSON.parse(localStorage.getItem('secondSelector')).manufacturer 
                     : ''
                  }
                  costInCredits = {
                     selectStarshipName 
                     ?  
                        selectNumber === 'firstSelector'
                        ?  JSON.parse(localStorage.getItem('firstSelector')).cost_in_credits 
                        :  JSON.parse(localStorage.getItem('secondSelector')).cost_in_credits 
                     : ''
                  }
                  length = {
                     selectStarshipName 
                     ?  
                        selectNumber === 'firstSelector'
                        ?  JSON.parse(localStorage.getItem('firstSelector')).length 
                        :  JSON.parse(localStorage.getItem('secondSelector')).length 
                     
                     : ''
                  }
                  maxAtmospheringSpeed = {
                     selectStarshipName 
                     ?  
                        selectNumber === 'firstSelector'
                        ?  JSON.parse(localStorage.getItem('firstSelector')).max_atmosphering_speed
                        :  JSON.parse(localStorage.getItem('secondSelector')).max_atmosphering_speed 
                     
                     : ''
                  } 
                  crew = {
                     selectStarshipName 
                     ?
                        selectNumber === 'firstSelector'
                        ?  JSON.parse(localStorage.getItem('firstSelector')).crew
                        :  JSON.parse(localStorage.getItem('secondSelector')).crew 
                     : ''
                  }
                  passengers = {selectStarshipName 
                     ? 
                        selectNumber === 'firstSelector'
                        ?  JSON.parse(localStorage.getItem('firstSelector')).passengers
                        :  JSON.parse(localStorage.getItem('secondSelector')).passengers 
                     : ''}
                  cargoCapacity = {
                     selectStarshipName 
                     ? 
                        selectNumber === 'firstSelector'
                        ?  JSON.parse(localStorage.getItem('firstSelector')).cargo_capacity
                        :  JSON.parse(localStorage.getItem('secondSelector')).cargo_capacity 
                     : ''
                  }
                  consumables = {
                     selectStarshipName 
                     ? 
                        selectNumber === 'firstSelector'
                        ?  JSON.parse(localStorage.getItem('firstSelector')).consumables
                        :  JSON.parse(localStorage.getItem('secondSelector')).consumables 
                     
                     : ''
                  }
                  starshipImage={selectStarshipName ?  styles[selectStarshipName.split(' ').join('')] : null}
                  starshipDataNum={selectNumber}
               />
            </>
          :
          <div
          className={styles.loadingContainer}
          >
            <CircularProgress/>
          </div>
         }
       
      </div>
   )
}