// import React from 'react'

// export const GifGridItem = (imgen) => {

//   console.log(imgen);
//   return (
//     <div>
//       {/* {imgen.title} */}
//     </div>
//   )
// }

import React from 'react'
// de esta forma recibiendo el objeto {...img} podemos desestructurar el objeto para que nuestro componente sea mas facil de leer
// pero tenemos el mismo efecto
export const GifGridItem = ({id, title, url}) => {
  
  //console.log(id, title, url); // de esta forma solo se muestra el valor del campo
  return (
    <div className='card animate__animated animate__pulse'>
      <img src={ url } alt={ title }/>
      <p> { title } </p>
    </div>
  )
}
