import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import { useOnHoverOutside } from "../hooks/useOnHoverOutside";

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [value]);

  return debouncedValue;
}

const NavItemText = (props) => {
  const dropdownRef = useRef(null); // Create a reference for dropdown container
  const [isMenuDropDownOpen, setMenuDropDownOpen] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const debouncedValue = useDebounce(isOpen, 200);
  // Call the hook

  useEffect(() => {
    setMenuDropDownOpen(false);
  }, [debouncedValue]);

  return (
    <div className="ml-[62px] mobile:hidden" ref={dropdownRef}>
      <Link
        to={props.link}
        className={props.class}
        onMouseOver={() => setMenuDropDownOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        {props.text}
      </Link>
      <div
        onMouseOver={() => setMenuDropDownOpen(true)}
        onMouseLeave={() => setMenuDropDownOpen(false)}
      >
        {isMenuDropDownOpen && props.children}
      </div>
    </div>
  );
};

export default NavItemText;
