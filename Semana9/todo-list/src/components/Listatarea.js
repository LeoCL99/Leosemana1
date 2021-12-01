
export default function Listatarea({tareas}) {
  return (
    <ul className="list-group">
      {tareas.map((task, i)=>(
          <li key={i} className="list-group-item">{task}</li>
      ))}
    </ul>
  )
}
