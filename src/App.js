import React,{useState} from 'react';
import './App.css';
import Header from './componentes/Header';
import FormularioTareas from './componentes/FormularioTareas';

const App = () => {

  const [tareas, cambiarTareas] = useState(
    [
      {
        id: 1,
        texto: 'Limpiar cuarto',
        completada: false
      },
      {
        id: 2,
        texto: 'Almuerzo a las 2',
        completada: false
      }
    ]
  );

   console.log(tareas)
  return (
      <div className='contenedor'>
          <Header />
          <FormularioTareas tareas={tareas} cambiarTareas={cambiarTareas}/>
      </div>
  );
}

export default App;
