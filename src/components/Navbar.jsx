import {
  BsFillBellFill,
  BsFillBasket2Fill,
  BsFillGrid3X3GapFill,
  BsFillGearFill,
  BsListUl,
} from "react-icons/bs";
import NavItemIcon from "./NavItemIcon";
import NavItemText from "./NavItemText";
import DropdownMenu from "./DropdownMenu";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";
import NavItemTextTry from "./NavItemTextTry";
import styles from "../styles";
const Navbar = (props) => {
  return (
    <>
      <nav className="flex w-full h-20 bg-slate-700">
        <div className="flex w-24"></div>
        <div className="flex gap-2 text-white leading-6 rounded-lg text-center w-1/4 ">
          <NavItemTextTry
            text={"Home"}
            to={"/"}
            className={"flex p-6 rounded-lg group"}
          >
            <DropdownMenu>
              <Link className={styles.menuItem}>ASsadasdasD</Link>
              <Link className={styles.menuItem}>ASdasD</Link>
              <Link className={styles.menuItem}>ASD</Link>
              <Link className={styles.menuItem}>ASdasdsadsasaD</Link>
            </DropdownMenu>
          </NavItemTextTry>
          <NavItemTextTry
            text={"Projects"}
            to={"/Projects"}
            className={"flex p-6 rounded-lg group"}
          >
            <DropdownMenu>
              <Link className={styles.menuItem} to="/Project">
                ASD
              </Link>
              <Link className={styles.menuItem}>ASdsadasD</Link>
              <Link className={styles.menuItem}>ASD</Link>
              <Link className={styles.menuItem}>ASD</Link>
            </DropdownMenu>
          </NavItemTextTry>
          <NavItemTextTry
            text={"About"}
            to={"/About"}
            className={"flex p-6 rounded-lg group"}
          />
          <NavItemTextTry
            text={"Contact"}
            to={"/Contact"}
            className={"flex p-6 rounded-lg group"}
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
