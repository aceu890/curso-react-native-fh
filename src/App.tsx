// import { TiposBasicos } from "./typescript/TiposBasicos";
// import { ObjetosLiterales } from "./typescript/ObjetosLiterales";
// import { Funciones } from './typescript/Funciones';
// import { Contador } from "./typescript/components/Contador";
// import { ContadorConHook } from "./components/ContadorConHook";
// import { Login } from './components/Login';
// import { Usuarios } from "./components/Usuarios";

import { Formularios } from "./components/Formularios";


const App = () => {
  return (
    <div className='mt-2'>
      <h1>Introducción a TS - REACT</h1>
      <hr />
      {/* <TiposBasicos /> */}
      {/* <ObjetosLiterales /> */}
      {/* <Funciones /> */}
      {/* <Contador /> */}
      {/* <ContadorConHook /> */}
      {/* <Login /> */}
      {/* <Usuarios /> renderizamos el componente Usuarios */}
      <Formularios />
    </div>
  )
}

export default App;
