import React, { useState, useEffect, useRef } from "react";
import styles from "../styles";

const DropdownMenu = (props) => {
  //const [activeMenu, setActiveMenu] = useState("main");

  return (
    <div className={props.class}>
      <div className={styles.dropdowncontent}>{props.children}</div>
    </div>
  );
};

export default DropdownMenu;

//css transition in notepad++
