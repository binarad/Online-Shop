import HomePage from "./components/HomePage.tsx";
import Header from "./components/Header.tsx";
export interface ProductType {
  name: string | undefined;
  price: number;
  description?: string;
  quantity: number;
  imgUrl?: string;
}

function App() {
  return (
    <div className="w-full flex flex-col items-center">
      <Header />
      <HomePage />
    </div>
  );
}
export default App;
