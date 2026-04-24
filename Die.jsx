export default function Die(props) {
  const className = props.isHeld ? "die held" : "die";

  return (
    <button className={className} onClick={props.hold}>
      {props.value}
    </button>
  );
}
