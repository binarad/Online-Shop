import { useEffect, useState } from "react";
import Card from "./components/Card.tsx";
import Header from "./components/Header.tsx";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";

export interface ProductType {
  name: string | undefined;
  price: number;
  description?: string;
  quantity: number;
  imgUrl?: string;
}

function HomePage() {
  const [data, setData] = useState<ProductType[]>([]);
  const [allData, setAllData] = useState<ProductType[]>([]);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const itemPerPage = 20;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/items.json");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        // console.log(`Fetched Data: ${data}`)
        setAllData(data);
        setData(data.slice(0, itemPerPage));
      } catch (error) {
        console.error(`Failed to fetch data: ${error}`);
      }
    };

    fetchData();
  }, []);

  const fetchMoreData = () => {
    const nextPageData = allData.slice(
      page * itemPerPage,
      (page + 1) * itemPerPage,
    );

    if (data.length >= allData.length) {
      setHasMore(false);
      return;
    }
    // console.log(`Next Page Data: ${nextPageData}`)
    setData((prevData) => [...prevData, ...nextPageData]);
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="w-full flex flex-col items-center">
      <Header />
      <div className="flex flex-wrap justify-start w-[1280px]">
        <InfiniteScroll
          dataLength={data.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<h3>Loading...</h3>}
          endMessage={<p>No more Data</p>}
          className="flex flex-wrap justify-start w-[1280px]"
        >
          {data.map((product: ProductType) => (
            <Link key={product.name} to={`/products/${product.name}`}>
              <Card
                key={product.name}
                productName={product.name}
                productPrice={product.price}
                productQuantity={product.quantity}
                productImg={product.imgUrl}
              />
            </Link>
          ))}
        </InfiniteScroll>
      </div>
    </div>
  );
}
export default HomePage;
