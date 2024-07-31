export default function Button(props) {
  return (
    <button
      className={`p-2 border-4 border-amber-100 rounded bg-amber-50 hover:bg-amber-100 transition-all duration-200 ${props.customClassName}`}
      onClick={props.onClickFunc}
    >
      {props.children}
    </button>
  );
}
