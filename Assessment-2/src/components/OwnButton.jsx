export default function OwnButton(props) {
  return (
    <button
      className={`p-2 border-4 border-amber-100 rounded bg-amber-50 ${props.customClassName}`}
      onClick={props.onClickFunc}
    >
      {props.children}
    </button>
  );
}
