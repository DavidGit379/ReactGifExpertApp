import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';
// import { getGifs } from '../helpers/getGrids';
// este componente se va a renderizar en la lista dentro del categories.map
export const GifGrid = ( {category}  ) => {
  
  // const [images, setImages] = useState([]);
  //s6v15 renombramos data como images para no cambiar el codigo sino tenemos que renombrar images.map
  const { data:images, loading } = useFetchGifs( category );
  
  // // const [counter, setCounter] = useState(0); // solo para demostrar useEffect. s6v10
  // // el useEffect permite que se renderice solo la primera vez, siempre que el segundo argumento que son las
  // // dependencias sea el [] arreglo sea vacio. s6v10
  // useEffect ( ()=> {
  //   getGifs( category )
  //     .then ( setImages );
  // },[ category ])
  
  //getGifs(); // con el button y el setCounter, getGifs se ejecutaria cada vez que se clickea y por ende se
  // renderiza, esto podria producir un bucle infinito, para ello se utiliza el useEffect. s6v10

  return (
    <>
    <h3 className='animate__animated animate__bounceInLeft'> {category} </h3>

    {/* { loading ? 'Cargando...' : 'Data cargada' } */}

    {/* // a diferencia del operador ternario se usa && es decir evalua la condicion logica
    // si es true ejecuta sino no pasa nada. para no evaluar la opcion sino null
    // loading ? <p>Cargando...</p> : null */}
    { loading && <p className='animate__animated animate__flash'>Cargando...</p> }

    <div className='card-grid'>
      
      {/* solo para demostrar useEffect s6v10
      <h3>{counter}</h3>
      <button onClick={ ()=> setCounter (counter+1)}></button> */}
      
        {/* s6v11 version explicita para mostrar los items del arreglo
        {           
          images.map( images => {
            return <li key={ images.id }> 
                     {images.title}
                   </li>
                   
          })
        }
        s6v11 version desestructurada para mostrar los items del arreglo
        {images.map( ({id, title}) => {
            return <li key={ id }> 
                     {title}
                   </li>
                   
          })
        }
        s6v11 version desestructurada con return implicito para mostrar los items del arreglo
        {images.map( ({id, title}) =>
                  <li key={ id }> 
                     {title}
                  </li>
                  )
        }
        s6v11 ahora que el map funciona, y como vamos a mostrar mas informacion como las imagenes de cada item
        vamos a crear otro componente llamado GifGridItem.js
        {
          images.map( img => (
            <GifGridItem 
                key={ img.id }
                img={ img }/>
          ))
        }
        s6v11 6:20 otra forma de pasar los items del arreglo images es desestructurando el img, entonces estamos mandando
        cada una de props como una propiedad independiente
        mando como argumento de GifGridItem un nuevo objeto utilizando el operador express {...img} */}
        {
          images.map( img => (
            <GifGridItem 
                key={ img.id }
                { ...img }/>
          ))
        }

      
    </div>
    </>
    
  )
}
