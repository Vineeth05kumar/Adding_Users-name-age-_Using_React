import Card from "../UI/Card";
import classes from "./DisplayUser.module.css";

export default function DisplayUser(props) {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user, index) => {
          return (
            <li key={user.id}>
              {user.name} ({user.age} Years Old)
            </li>
          );
        })}
      </ul>
    </Card>
  );
}
