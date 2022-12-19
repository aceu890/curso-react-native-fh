import { useCounter } from '../hooks/useCounter';


export const ContadorConHook = () => {


const { valor , acumular } = useCounter(80);

  return (
    <>
        <h3>Contador con hook: <small> { valor } </small> </h3>

        <button 
        className='btn btn-primary'
        onClick={ () => acumular(5) }
        >
          +1
        </button>
        &nbsp;
        <button 
        className='btn btn-primary'
        onClick={ () => acumular(-5) }
        >
          -1
        </button>
    </>
  )
}
        

