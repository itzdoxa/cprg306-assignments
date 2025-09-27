
const Item = ({ name, quantity, category }) => {
  return (
    <li className="border rounded-md p-2 mb-2 text-white">
      <p>{name}</p>
      <p>Quantity: {quantity}</p>
      <p>Category: {category}</p>
    </li>
  );
};

export default Item;
