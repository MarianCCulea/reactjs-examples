import React, { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import OutsideClick from "./OutsideClick";
import styles from "../styles";
import { Link } from "react-router-dom";

const Dropdown = (props) => {
  function DropdownItem(props) {
    return (
      <Link to={props.link} className={props.class}>
        {props.children}
      </Link>
    );
  }

  return (
    <div
      className={`dropdown ${styles.dropdown1}`}
      //style={{ height: menuHeight }}
    >
      <div className="menu">
        <DropdownItem link={"/Home"} class={"block text-white"}>
          My Profile
        </DropdownItem>
        <DropdownItem link={"/Home"} class={"block text-white"}>
          Settings
        </DropdownItem>
        <DropdownItem link={"/Home"} class={"block text-white"}>
          Animals
        </DropdownItem>
      </div>
    </div>
  );
};

export default Dropdown;
