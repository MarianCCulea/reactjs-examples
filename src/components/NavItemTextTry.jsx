import { Link } from "react-router-dom";
import styles from "../styles";

const NavItemTextTry = (props) => {
  return (
    <div className={props.className}>
      <Link to={props.to} className={styles.dropdownbtn}>
        {props.text}
      </Link>
      {props.children}
    </div>
  );
};

export default NavItemTextTry;
