import { useState } from "react"
export default function AñadirTareas({setTareas,tareas}) {
const [texto,setTexto]=useState("");
const agregarNuevaTarea=()=>{
    setTareas([...tareas, texto])
    setTexto("")
}
  return (
    <div class="form-group">
      <input type="text" class="form-control" value={texto}onChange={(e)=>{
          setTexto(e.target.value);
      }}></input>
      <button class="btn btn-primary" onClick={agregarNuevaTarea}>Agregar Tarea</button>
    </div>
  )
}
