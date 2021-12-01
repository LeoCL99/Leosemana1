//Reglas de componente
//.1 función o clase
//.2 el nombre de la funcion/componente tiene que comenzar en Mayúscula
//.3 esa funcion/componente tiene que retornar algo
//.4 tiene que exportarse por defecto, para que otros componentes, lo puedan reutilizar

//los props se reciben en el hijo con el nombre del "atributo" que se le puso en el componente padre
//estos props son como los para metros de una funcion
//<Main subtitulo="ewrw" tituloPadre={Estado} actualizar={setEstado}/>


function Main({subtitulo,tituloPadre,actualizarTitulo,mostrarInfo}) {
    
return(
    <main>
      <div>
          <h2>{subtitulo}</h2>
          {/*redenrizado condicional,props,estado,variable*/ }
          {/* si mostrarInfo es trie? nuestro esto si es verdad : muestra esto otro si es false*/}
          {mostrarInfo?(<p>Lorem ipsum dolor sit amet.</p>):null}
           <p>Lorem ipsum dolor sit amet.</p>
           <p>El titulo de App es {tituloPadre}</p>
           <button onClick={()=>{actualizarTitulo("Titulo desde Main")}}>Actualizar desde Main</button>
              </div>    
    </main>
)    
}
export default Main;