import Product from "./Product";
import ImgUnavailable from "./assets/ImgUnavailable.webp";

const products = [
  {
    id: 1,
    name: "Laptop",
    price: 1000.0,
    description: "High-performance laptop for professionals",
  },
  {
    id: 2,
    name: "Smartphone",
    price: 700.0,
    description: "Latest model with OLED screen and 5G support",
  },
  {
    id: 3,
    name: "Headphones",
    price: 150.0,
    description: "Noise-cancelling over-ear headphones",
  },
  {
    id: 4,
    name: "Camera",
    price: 1200.0,
    description: "DSLR with 4K video recording capability",
  },
  {
    id: 5,
    name: "Smartwatch",
    price: 250.0,
    description: "Waterproof smartwatch with health tracking features",
  },
];

const ProductList = () => {
  return (
    <ul className=" w-1/2 divide-y divide-gray-300">
      {products.map((item) => (
        <Product key={item.id} src={ImgUnavailable} name={item.name} price={item.price} description={item.description} />
      ))}
    </ul>
  );
};

export default ProductList;
