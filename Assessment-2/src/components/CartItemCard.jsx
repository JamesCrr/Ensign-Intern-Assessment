import OwnButton from "../components/OwnButton.jsx";

export default function CartItemCard(props) {
  return (
    <div className="flex justify-between items-center gap-x-5">
      <div className="flex justify-start items-center gap-x-4 w-1/3">
        <img className="w-14 sm:w-14 md:w-20" src={props.item.image} alt="Image of Item" />
        <h1>{props.item.title}</h1>
      </div>
      <div className="flex justify-between items-center gap-x-3">
        <OwnButton customClassName={"p-0.5 text-lg"} onClickFunc={props.onRemoveCount}>
          -
        </OwnButton>
        <p className="text-base md:text-lg font-semibold">{props.itemCount}</p>
        <OwnButton customClassName={"p-0.5 text-lg"} onClickFunc={props.onAddCount}>
          +
        </OwnButton>
      </div>
      <p className="w-20 text-right text-base md:text-lg font-semibold">
        ${(props.item.price * props.itemCount).toFixed(2)}
      </p>
    </div>
  );
}
