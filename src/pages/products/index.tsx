import ProductLayout from "@/components/layouts/ProductLayout";
import CartLayout from "@/components/layouts/CartLayout";
import Image from "next/image";
import Button from "@/components/elements/Button";
import Counter from "@/components/fragments/Counter";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  // CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { useEffect, useState } from "react";
import getProducts from "@/services/products.service";

type Product = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  rating: number[];
  title: string;
};

type ProductList = {
  products: Product[];
  handleAddtoCart: (id: number) => void;
};

type CartItem = {
  id: number;
  qty: number;
};

const ProductPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cartIsVisible, setCartIsVisible] = useState<boolean>(false);
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);

  // useEffect(() => {
  //   setCart(localStorage.getItem("cart"));
  // }, []);

  const handleCartVisibility = () => {
    setCartIsVisible(!cartIsVisible);
  };

  // type NewItem = Pick<CartItem, "id">;

  const handleAddtoCart = (id: number) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { id: id, qty: 1 }]);
    }
  };

  return (
    <>
      <ProductLayout handleCartVisibility={handleCartVisibility}>
        <Header />
        <Content products={products} handleAddtoCart={handleAddtoCart} />
      </ProductLayout>
      {cartIsVisible && (
        <CartLayout>
          <div className="flex flex-row justify-between mx-8 text-3xl text-gray-600 font-bold">
            <h2>Your Cart</h2>
            <button onClick={() => handleCartVisibility()}>&times;</button>
          </div>
          <hr className="mx-8" />
          {cart.map((item) => {
            const product = products.find((product) => product.id === item.id);
            const total = product?.price * item.qty;
            return (
              <div
                key={item.id}
                className="flex flex-row items-center p-3 gap-1 w-full h-32 bg-amber-400"
              >
                <input type="checkbox" name="" id="" />

                <Image
                  src={product?.image}
                  alt="image"
                  width={64}
                  height={64}
                  className="object-contain bg-gray-300"
                />
                <div className="w-full text-lg">
                  <h2 className="font-semibold">{product?.title}</h2>
                  <p className=" text-gray-600">$ {total}</p>
                </div>
                <Counter number={item.qty} />
                <button className="text-2xl text-gray-500">&times;</button>
              </div>
            );
          })}
        </CartLayout>
      )}
    </>
  );
};

const Header = () => {
  return (
    <div className="flex flex-row justify-between px-16 mt-8">
      <h1 className="text-2xl font-bold">Our Products</h1>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Sort by: Featured" />
        </SelectTrigger>
        <SelectContent className="bg-neutral-50">
          <SelectItem value="feature">Sort by: Featured</SelectItem>
          <SelectItem value="high">Price: Low to High</SelectItem>
          <SelectItem value="low">Price: High to Low</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

const Content: React.FC<ProductList> = ({ products, handleAddtoCart }) => {
  return (
    <div className="flex flex-wrap justify-between gap-4 px-16 mt-8 mb-8">
      {products.map((product) => (
        <Card key={product.id} className="max-w-sm rounded-md overflow-hidden">
          <CardHeader className="rounded-t-md">
            <Image
              src={product.image}
              alt={product.title}
              width={400}
              height={200}
              className="w-full h-64 object-contain"
            />
          </CardHeader>
          <CardContent>
            <CardTitle className="font-bold truncate">
              {product.title}
            </CardTitle>
            <CardDescription className="line-clamp-2">
              {product.description}
            </CardDescription>
          </CardContent>
          <CardFooter className="flex flex-row justify-between items-center">
            <p className="w-full text-2xl font-semibold">$ {product.price}</p>
            <Button onClick={() => handleAddtoCart(product.id)} round="xl">
              +
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default ProductPage;
