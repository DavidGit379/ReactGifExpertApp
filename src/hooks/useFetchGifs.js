import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGrids"

export const useFetchGifs = ( category ) => {
  const [state, setState] = useState({
    data: [],
    loading: true
  })
// como el getGifs es una promesa el useEffect no puede ser async
  useEffect(() => {
    
    getGifs ( category )
      .then (imgs => {
          console.log('solo la data que nos interesa del objeto',imgs);
          setState({
            data: imgs,
            loading: false
          });  
             
      })
  
  }, [ category ])
  


  return state; //el objeto state es data:[], loading: true
}
