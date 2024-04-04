import classes from "./Button.module.css";

export default function Button(props) {
  return (
    <button
      className={classes.button}
      type={props.type || "button"}
      onClick={props.onOkayButtonClicks}
    >
      {props.children}
    </button>
  );
}
