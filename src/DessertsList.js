export default function DessertsList(props) {
  const sortedData = [...props.data]
    .filter(dessert => dessert.calories < 500)
    .sort((a, b) => a.calories - b.calories);

  return (
    <ul>
      {sortedData.map(dessert => (
        <li key={dessert.id}>{dessert.title} - {dessert.calories} cal</li>
      ))}
    </ul>
  );
}
