
const Item = ({ name, quantity, category, onSelect }) => {
  return (
    <li   onClick={() => onSelect && onSelect(name)}
    className="border rounded-md p-2 mb-2 text-white cursor-pointer hover:bg-gray-700 transition">
      <p>{name}</p>
      <p>Quantity: {quantity}</p>
      <p>Category: {category}</p>
    </li>
  );
};

export default Item;
