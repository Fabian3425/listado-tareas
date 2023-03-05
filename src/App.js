import React,{useState, useEffect} from 'react';
import './App.css';
import Header from './componentes/Header';
import FormularioTareas from './componentes/FormularioTareas';
import ListaTareas from './componentes/ListaTareas';

const App = () => {
  //Obtenemos las tareas guardadas de localStorage
  const tareaGuardadas = 
  localStorage.getItem('tareas') ? 
  //JSON.parse transforma el valor
  JSON.parse(localStorage.getItem('tareas')) : [];
  

  //Establecer estado de las tareas
  const [tareas, cambiarTareas] = useState(tareaGuardadas);

  console.log(tareas)

  //Guarda estado en localstorage
  useEffect(()=>{
    //metodo setItem: Permite establecer un elemento en el espacio local
    //Hay que darle un nombre ejemplo: setItem('tarea')

    //Transformar un Objeto en una cadena de texto
    //Json.stringify transforma a un JSON
    localStorage.setItem('tareas', JSON.stringify(tareas));
    //console.log('tarea cambiada')
  }, [tareas]);


    //Accedemos a localstorage y comprabamos si mostrarCompletadas es null
    let configMostrarCompletadas = '';
    if(localStorage.getItem('mostrarCompletadas') === null){
      configMostrarCompletadas = true;
    }else{
      configMostrarCompletadas = localStorage.getItem('mostrarCompletadas') === 'true';
    }

    //estado de mostrar completadas
    const [mostrarCompletadas, cambiarMostrarCompletadas] = useState(configMostrarCompletadas);

    useEffect(()=>{
      //toString transforma el valor a una cadena de texto
      localStorage.setItem('mostrarCompletadas', mostrarCompletadas.toString());  
    }, [mostrarCompletadas]);
    //[mostrarCompletas] se agrega cada vez que cambie mostrarCompletadas


   //console.log(tareas)
  return (
      <div className='contenedor'>
          <Header 
            mostrarCompletadas={mostrarCompletadas}
            cambiarMostrarCompletadas={cambiarMostrarCompletadas}
          />
          <FormularioTareas tareas={tareas} cambiarTareas={cambiarTareas}/>
          <ListaTareas 
            tareas={tareas}
            cambiarTareas={cambiarTareas}
            mostrarCompletadas={mostrarCompletadas}  
          />
      </div>
  );
}

export default App;
