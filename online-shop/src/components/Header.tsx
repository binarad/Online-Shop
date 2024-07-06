import MainLogo from "../assets/main-logo-black-transparent.png";
import CartLogo from "../assets/cart-regular-24.png";

const Header = () => {
  return (
    <div className="flex h-[75px] w-full flex-row justify-center items-center px-[16px] border-b border-[#D9D9D9] bg-[#FFFFFF] gap-6 box-border flex-none order-none self-stretch flex-grow-1">
      <a
        href="#Home"
        className="w-[40px] h-[40px] flex flex-row items-center flex-none order-none grow-0 mr-auto"
      >
        <img src={MainLogo} className="h-full w-full" />
      </a>
      <input
        className="w-[600px] h-[35px] rounded-full  border border-black p-2"
        type="text"
        placeholder="Search your product"
      />
      <a
        href=""
        className="ml-auto w-[40px] h-[35px] flex justify-center items-center"
      >
        <img src={CartLogo} className="w-full h-full" />
      </a>
    </div>
  );
};

export default Header;
