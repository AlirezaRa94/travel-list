export default function Stats({ items }) {
  const numberOfItems = items.length;
  const numberOfPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numberOfPacked / numberOfItems) * 100);

  if (!numberOfItems) {
    return (
      <p className="stats">
        <em>Start adding some items to yuor packing list 🚀</em>
      </p>
    );
  }

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go ✈️"
          : `👜 You have ${numberOfItems} items on your list, and you already packed ${numberOfPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
