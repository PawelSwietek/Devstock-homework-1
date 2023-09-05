const Product = ({ src, name, price, description }) => {
  return (
    <li className="pb-4 flex items-center">
      <div className="flex items-center  w-2/12 mr-4">
        <img className="" src={src}></img>
      </div>

      <div className="flex-1">
        <p className="text-lg font-medium text-gray-900 truncate">{name}</p>
        <p className="text-lg text-gray-500 truncate">{description}</p>
      </div>
      <div className="text-gray-900 text-base font-semibold inline-flex items-center">{price} zl</div>
    </li>
  );
};

export default Product;
