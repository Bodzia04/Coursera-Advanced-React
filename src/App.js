function Dessert(props){
  return <li key={props.key}>{props.title}</li>
}

export default function App(){
  const desserts = ['cake', 'chocolate', 'sweet'];

  return (
    <ul>
      {desserts.map((dessert) => (
        <Dessert key={dessert} title={dessert}/>
      ))}
    </ul>
  )
}