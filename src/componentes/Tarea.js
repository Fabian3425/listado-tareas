import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';

const Tarea = ({tarea}) => {

    const [editandoTarea, cambiarEditandoTarea] = useState(false);
    const [nuevaTarea, cambiarNuevaTarea] = useState(tarea.texto);

    const handleSubmit = (e) =>{
        e.preventDefault();
        cambiarEditandoTarea(false)
    }


    return ( 
        <li className="lista-tareas__tarea">
            <FontAwesomeIcon 
                icon={faCheckSquare} 
                className='lista-tareas__icono lista-tareas__icono-check'
            />
            <div className="lista-tareas__texto">
                
            {
            //Si este valor es true, entonces muestra este formulario
            editandoTarea ? 
            <form action="" className="formulario-editar-tarea" onSubmit={handleSubmit}>
                <input 
                    type='text'
                    className="formulario-editar-tarea__input"
                    //Si dejas el value, el input no te deja cambiar el texto, 
                    //porque estoy llamando {nuevaTarea}=tarea.texto y tiene un estado que no cambia
                    value={nuevaTarea}
                    //Para solucionar esto, agregar onChange
                    onChange={(e)=> cambiarNuevaTarea(e.target.value)}
                />
                <button
                    type="Submit"
                    className="formulario-editar-tarea__btn">
                    Actualizar
                </button>
                
            </form> 
            //Sino, muestrame la tarea   
            : tarea.texto
            }
            
                
            </div>
            <div className="lista-tareas__contenedor-botones">
                <FontAwesomeIcon 
                    icon={faEdit} 
                    className='lista-tareas__icono lista-tareas__icono-accion'
                    //Al agregar ! le estoy diciendo que me agregue el valor contrario de false, 
                    onClick={()=> cambiarEditandoTarea(!editandoTarea)}
                />
                <FontAwesomeIcon 
                    icon={faTimes} 
                    className='lista-tareas__icono lista-tareas__icono-accion'
                />
            </div>
            
        </li>
    );
}
 
export default Tarea;