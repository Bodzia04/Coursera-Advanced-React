function Card({title, children}){
  return (
    <div className='card'>
      <h1>{title}</h1>
      <div className='card-content'>
        <p>{children}</p>
      </div>
    </div>
  )
};

export default function App(){
  return (
    <Card title='React props'>
      <p>Lorem nbtbnt ijtnbtbnt rbnr tbn tbntbnrbnrt ng gn ergnre gnre re   </p>
    </Card>
  )
};