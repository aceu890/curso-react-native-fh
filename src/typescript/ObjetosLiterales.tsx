//  Las interfaces son las que mandan sobre la definicion de los objetos
// Las interfaces solo sirven para poner reglas de validación a sus objetos
interface Persona {
  nombreCompleto:string;
  edad:number;
  direccion: Direccion
}

interface Direccion {
  pais: string;
  casaNo: number;
}

export const ObjetosLiterales = () => {

  const persona: Persona = {
    nombreCompleto: 'Fernando',
    edad: 35,
    direccion: {
      pais: 'canada',
      casaNo: 615
    }
  }
    
  return (
    <>
    <h3>Objetos Literales :)</h3>
    <code>
      <pre>
    {   JSON.stringify(persona, null, 2) }
      </pre>
    </code>
    </>
  )
}
