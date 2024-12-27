import './App.css';
import DessertsList from './DessertsList'

const data = [
  {
    id: 1,
    title: 'Macaron',
    price: '$5.00',
    calories: 600  
  },
  {
    id: 2,
    title: 'Tiramisu',
    price: '$5.00',
    calories: 300
  },
  {
    id: 3,
    title: 'Ice Cream',
    price: '$5.00',
    calories: 200
  },
  {
    id: 4,
    title: 'Chocolate Cake',
    price: '$5.00',
    calories: 400  
  }
];

function App() {
  return <DessertsList data={data} />;
}

export default App;
