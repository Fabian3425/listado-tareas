import React from 'react';
import Tarea from './Tarea';


const ListaTareas = ({tareas, cambiarTareas, mostrarCompletadas}) => {

    const toggleCompletada = (id) =>{

        cambiarTareas(tareas.map((tarea)=>{
            if(tarea.id === id){
                return {...tarea, completada : !tarea.completada}
            }
            return tarea;
        }));

    }

    const editarTarea = (id, nuevoTarea) =>{

        cambiarTareas(tareas.map((tarea)=>{
            if(tarea.id === id){
                return {...tarea, texto : nuevoTarea}
            }
            return tarea;
        }));

    }

    const borrarTarea = (id) =>{

        cambiarTareas(tareas.filter((tarea)=>{
            if(tarea.id !== id){
                return tarea
            }
            return;
        }));

    }

    return (
        <ul className='lista-tareas'>
            {

            //Si el numero de tareas en mayo a 0 entonces
            //Agrega la siguiente tarea.
            // ? => 'Entonces'
            tareas.length > 0 ? 
                //tareas.map, me devuelve todas las tareas que estén en la lista
                tareas.map((tarea) => {

                    if(mostrarCompletadas){
                        return <Tarea 
                            key={tarea.id} 
                            tarea={tarea}
                            toggleCompletada={toggleCompletada}
                            editarTarea={editarTarea}
                            borrarTarea={borrarTarea}
                        />
                    //Si la tarea no esta completada, la devolvemos
                    }else if(!tarea.completada){
                        return <Tarea 
                            key={tarea.id} 
                            tarea={tarea}
                            toggleCompletada={toggleCompletada}
                            editarTarea={editarTarea}
                            borrarTarea={borrarTarea}
                        />
                    }
                    //Si ya esta completada no la devolvemos 
                    return;
                })
            : 
            //De lo contrario agrega este texto
            <div className='lista-tareas__mensaje'>~ No hay tareas agregadas ~</div>
            }
        </ul>
    );
}
 
export default ListaTareas;