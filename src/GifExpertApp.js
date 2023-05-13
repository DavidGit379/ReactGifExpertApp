import React, { useState } from 'react'
import { AddCategory } from './AddCategory';
import { GifGrid } from './components/GifGrid';

export function GifExpertApp() {

  // const categories = ['One Punch','Samurai X','Dragon Ball'];
  const [categories, setCategories] = useState([' John Wick ']);
  // categories es el objeto array del estado, setCategories es la funcion para cambiar el estado del objeto
  // previamente el objeto categories es inicializado con un valor a traves de argumento del useState
  // const HandleAdd = () => {

  //   setCategories([...categories,'Hunter'])
  //   // para cambiar el estado de categories lo debo hacer con la funcion setCategories
  //   // para este caso desestructuramos el array y agregamos un elemento fijo para cada clic
  //   // en particular se agregara el mismo elemento al final del array
  // }

  return (
    <div>
      <h2>GifExpertApp</h2>
      <h3>Buscador Online de Gifs, usando la base de datos Giphy</h3>
      <AddCategory  setCategories={setCategories}/> 
      <hr/>

      {/* este boton llama a la funcion HandleAdd */}

      <ol>
        {
          // con la funcion map se recorre el array categories donde category es el elemento en cada iteracion
          categories.map( category => {
            return <GifGrid 
                      key={ category }
                      category={category}/>
            // <li key={ category }> { category } </li>
          })
        }
      </ol>
    </div>
  )
}
//* creacion de la APIkey en Giphy
// developergiphy
// uupppotrerodegaray@gmail.com
// Wanakgiphy
// passGiphy379
// APIkey=XcEdxqSsGGGc0FnL2dPWEfvZjNrxz9N1