
import { useEffect, useState } from 'react'
import axios from 'axios'
import { CircularProgress, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import styles from './styles.module.scss'
import StarshipData from '../StarshipData/StarshipData'


export default function StarsipSelector(){

   const [allStarships, setStarships] = useState([])

   const [selectStarshipName, setSelectStarshipName] = useState(null)

   const [selectStarship, setSelectStarship] = useState(null)

   const handleChange = event => {
      setSelectStarshipName(prev => event.target.value)
      if(allStarships){
         allStarships.map(starship => {
        
            if(starship.name === event.target.value){
               setSelectStarship(prev => starship)
               console.log(starship)
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

   console.log('allStarships',allStarships)

   return(
      <div className={styles.container} >
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

               : <CircularProgress/>
              
              }
            </Select>
        </FormControl>
       <StarshipData
         name={selectStarship ?  selectStarship.name : ''}
         model = { selectStarship ?  selectStarship.model : ''}
         manufacturer = { selectStarship ? selectStarship.manufacturer : ''}
         costInCredits = {selectStarship ?  selectStarship.cost_in_credits : ''}
         length = {selectStarship ?  selectStarship.length : ''}
         maxAtmospheringSpeed = {selectStarship ?  selectStarship.max_atmosphering_speed : ''} 
         crew = {selectStarship ? selectStarship.crew : ''}
         passengers = {selectStarship ? selectStarship.passengers : ''}
         cargoCapacity = {selectStarship ? selectStarship.cargo_capacity : ''}
         consumables = {selectStarship ? selectStarship.consumables : ''}
         starshipImage={selectStarship ?  styles[selectStarship.name.split(' ').join('')] : null}
       />
      </div>
   )
}