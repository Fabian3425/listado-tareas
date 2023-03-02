import React from 'react';
import Tarea from './Tarea';


const ListaTareas = ({tareas}) => {
    return (
        <ul className='lista-tareas'>
            {
            //Si el numero de tareas en mayo a 0 entonces
            //Agrega la siguiente tarea.
            // ? => 'Entonces'

            tareas.length > 0 ? tareas.map(tarea => <Tarea key={tarea.id} tarea={tarea}/>)
            : 
            //De lo contrario agrega este texto
            <div className='lista-tareas__mensaje'>~ No hay tareas agregadas ~</div>
            }
        </ul>
    );
}
 
export default ListaTareas;