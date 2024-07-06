import { useEffect, useState } from "react";
import Card from "./components/Card.tsx";
import Header from "./components/Header";
import products from "./items.json";

interface ProductType {
  name: string | undefined;
  price: number;
  quantity: number;
  imgUrl?: string;
}

function App() {
  const [currentPage, setCurrnetPage] = useState<number>(1);
  const [displayedProducts, setDisplayedProducts] = useState<ProductType[]>([]);
  const itemPerPage = 20;
  const MaxPage = Math.floor(products.length / 20);
  useEffect(() => {
    const loadInitalProducts = () => {
      const initialProducts = products.slice(0, itemPerPage);
      setDisplayedProducts(initialProducts);
    };

    loadInitalProducts();
  }, [itemPerPage]);

  useEffect(() => {
    const loadMoreProducts = () => {
      const newPage = currentPage + 1;
      const newProducts = products.slice(0, itemPerPage * newPage);
      setDisplayedProducts(newProducts);
      setCurrnetPage(newPage);
      console.log("New Page: " + newPage);
    };
    const handleScroll = () => {
      console.log(window.scrollY);
      if (window.scrollY < 820 && window.scrollY > 750) {
        loadMoreProducts();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentPage, MaxPage]);

  return (
    <div className="w-full flex flex-col items-center">
      <Header />
      <div className="flex flex-wrap justify-start w-[1280px]">
        {displayedProducts.map((product: ProductType, index) => {
          return (
            <Card
              key={index}
              productName={product.name}
              productPrice={product.price}
              productQuantity={product.quantity}
              productImg={product.imgUrl}
            />
          );
        })}
      </div>
      {/* <Card product_name={productName} product_price={productPrice} product_quantity={productQuantity}/>  */}
    </div>
  );
}
export default App;
