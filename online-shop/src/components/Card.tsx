interface CardProps {
  productName: string | undefined;
  productPrice: number;
  productQuantity: number;
  productImg?: string;
}
const Card: React.FC<CardProps> = ({
  productName,
  productPrice,
  productQuantity,
  productImg,
}) => {
  return (
    <div className="h-[400px] w-[300px] items-center justify-center flex flex-col m-[10px] p-[2.5px] border border-[#D9D9D9] rounded-lg">
      <img
        src={productImg}
        alt="img"
        className="h-[250px] w-[250px] aspect-square"
      />
      <div className="m-2 flex flex-col w-[220px] justify-center ">
        <p className="">{productName}</p>
        <p className="font-bold">${productPrice}</p>
        <p className="text-[12px]">Quantity: {productQuantity}</p>
      </div>
    </div>
  );
};

export default Card;
