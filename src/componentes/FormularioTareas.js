import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPlusSquare } from '@fortawesome/free-solid-svg-icons';

const FormularioTareas = ({tareas, cambiarTareas}) => {

    const [inputTarea, cambiarInputTarea] = useState('');

    const handleinput = (e) =>{
        cambiarInputTarea(e.target.value)
    }


    const handleSubmit = (e) =>{
        e.preventDefault();

        cambiarTareas([
            //Con los 3 puntos toma todo el arreglo
            ...tareas,
            {
                id:uuidv4(),
                texto: inputTarea,
                completada:false
            }
        ]);

        //Limpiar input luego de agregar la tarea
        cambiarInputTarea('')
    }


    return (
        <form action='' className='formulario-tareas' onSubmit={handleSubmit}>
            <input type="text"
                className='formulario-tareas__input'
                placeholder='Escribe una tarea'
                value={inputTarea}
                onChange={(e) => handleinput(e)}
            /> 
            <button 
                type="submit"
                className='formulario-tareas__btn'>
                <FontAwesomeIcon 
                    icon={faPlus}
                    className="formulario-tareas__icono"
                />
            </button>

        </form>
    );
}
 
export default FormularioTareas;