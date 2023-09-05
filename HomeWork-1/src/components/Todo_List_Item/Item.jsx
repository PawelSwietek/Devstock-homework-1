const Item = ({ name, done, id, toggleCheck }) => {
  return (
    <li className="space-x-2 flex items-center">
      <input
        className="checked:bg-blue-700 w-8 h-8 rounded-lg"
        type="checkbox"
        value={done}
        checked={done}
        onChange={() => toggleCheck(id)}
      />
      <span className={`${done && "line-through"} text-2xl text-gray-700`}>{name}</span>
    </li>
  );
};

export default Item;
