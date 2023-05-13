import React,{useState} from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {
// se recibe las props desestructuradas como {lo que me interesa} en este caso {setCategories}
    const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault(); //previene el comportamiento del formulario
    //validacion para que ingrese 2 letras como minimo y me limpie el valor del input
    if ( inputValue.trim().length > 2 ) {
      setCategories( cats => [inputValue,...cats]);
    //como necesito las categories pero no los tengo porque no los recibo como argumento (se puede pedir como argumento)
    //pero tambien puedo tomar el estado que tiene categories usando la referencia a setCategories y setCategories se puede llamar con un
    //callback que tiene el estado anterior cats => [...cats, ] y luego agrego en nuevo valor que sera el inputValue
      setInputValue('');
    }
    
    setInputValue('');
  }

  return (
    
    <form onSubmit={ handleSubmit  }>
      <h2>{ inputValue }</h2>
      <input
        type="text"
        value={ inputValue }
        onChange={ handleInputChange }
      />  
    </form>
      
    
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}
// con esto defino los argumentos requeridos y que sea una funcion para este componente
// esto da un regla a los programadores, un mensaje de error por consola que se necesita obligatoriamente
// una funcion en el argumento: 
//Warning: Failed prop type: The prop `setCategories` is marked as required in `AddCategory`, but its value is `undefined`.