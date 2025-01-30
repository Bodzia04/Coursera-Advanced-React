import './App.css';
import { useState } from 'react';

function App() {
  const [giftCard, setGiftCard] = useState({
    customer: 'Bohdan Marchuk',
    text: 'Free dinner for 4 guests.',
    instructions: 'To use your coupon, click the button below.',
    valid: true
  });

  function spendGiftCard(){
    setGiftCard(prevState => {
      return ({
        ...prevState,
        text: 'Your coupon has been used.',
        instructions: 'Please visit our restaurant to renew your gift card.',
        valid: false
      });
    });
  };

  return (
    <div>
      <h1>Gift Card Page</h1>
      <h2>Customer: {giftCard.customer}</h2>
      <h3>{giftCard.text}</h3>
      <p>{giftCard.instructions}</p>
      {giftCard.valid && <button onClick={spendGiftCard}>Spend Gift Card</button>}
    </div>
  )
}
export default App;
