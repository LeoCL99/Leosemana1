import { useState } from "react"
//importnado css, cuando importamos algo que no es JS tenemos qye añadirle la extension
import 'bootstrap/dist/css/bootstrap.min.css';
import AñadirTareas from "./components/AñadirTareas";
import Listatarea from "./components/Listatarea";
export default function App() {
const [tareas,setTareas]=useState([]);

  return (
    <div>
      <AñadirTareas setTareas={setTareas} tareas={tareas}/>
      <Listatarea tareas={tareas} />
    </div>
  )
}
