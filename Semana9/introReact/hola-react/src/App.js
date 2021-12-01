import{useState}from "react";
import Main from "./components/Main";
//App es el componente principal
function App() {
  //1. un componente solamente deberetornar 01
  //2. toda etiqueta debe estar cerrada
  //3. si deseio agregar JS, en el JSX(HTML), hay que poner{}



  //const[estado, funcEstado]=useState(estado-inicial)
  const[contador, setContador]=useState(0)
  const[titulo, setTitulo]=useState("Mi titulo");
  const [texto,setTexto]=useState("")

  //Levantamiento de estado - LiftingState

  // let titulo='Titulo Variable'

  //contador=5;
  const actualizarContador=()=>{
    setContador(contador+1);
  };
  const actulizarTexto=(e)=>{
    console.log(e);
    //actualizar el estado
    setTexto(e.target.value);
  };

  const productos=[
    {
      nombre:"Peluche",
      precios:50
    },
    {
      nombre:"Furro 3000",
      precio:1
    },
    {
      nombre:"pinguino",
      precio:100
    },
    {
      nombre:"GPU RTX 3060",
      precio:3000
    }
  ];
  return (
    <div>
    <header>
   <h1>{titulo}</h1>
   <p>{contador}</p>
   <img src="https://picsum.photos/200" alt="imagen"></img>
   <br/>
   <button onClick={actualizarContador}>Aumentar</button>
   <button onClick={()=>{setTitulo("Titulo con React");
  }}>Cambiar H1</button>
  <hr/>
  {/*para llmar comopenentes que tengan JSX, los invoco como si fueran etiquetas de HTML con la misma sintaxis*/}
 
   </header>
    <Main subtitulo="Yo soy el Subtitulo"
    mostrarInfo={true}numero={1} tituloPadre={titulo} actualizarTitulo={setTitulo}/>

<Main subtitulo="Segundo Subtitulo"
    mostrarInfo={false}numero={2}/>
    {/* componente controlados*/}
    {/* todo input debe estar amarrado a un estado*/}
    <div>
      <input type="text" placeholder="Ingrese texto..." value={texto} 
     // onChange={(e)=>{actulizarTexto(e)}}
     onChange={(e)=>{
       setTexto(e.target.value);
     }}
      />
    </div>
    {/* remderizar Listas o arreglos*/}
    {/* cuando renderizemos arreglos necesitamos un keypor cada item y tieneques er unico el key*/}
    <ul>
      {productos.map(({nombre,precio},i)=>( 
          (<li key={i}>{`${nombre}-${precio}`}</li>)
      ))}
    </ul>
    </div>
  );
}

export default App;
