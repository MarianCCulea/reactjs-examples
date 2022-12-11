import { useState, useRef } from "react";
import { useOnHoverOutside } from "./hooks/useOnHoverOutside";
import styles from "./styles";

export default function Header() {
  const dropdownRef = useRef(null); // Create a reference for dropdown container
  const [isMenuDropDownOpen, setMenuDropDownOpen] = useState(false);

  // Function to close dropdown
  const closeHoverMenu = () => {
    setMenuDropDownOpen(false);
  };

  useOnHoverOutside(dropdownRef, closeHoverMenu); // Call the hook

  return (
    <div className="flex justify-center header">
      <div className="container container-mobile flex justify-between laptop1280:py-[15px] py-[20px]">
        <div className="flex items-center">
          <div className="ml-[62px] mobile:hidden" ref={dropdownRef}>
            <button
              className="text-dark-grey-100"
              onMouseOver={() => setMenuDropDownOpen(true)} //use mouseover event to show dropdown
            >
              Hover Menu
            </button>

            {isMenuDropDownOpen && <Menu />}
          </div>
        </div>
      </div>
    </div>
  );
}
function Menu() {
  return (
    <>
      <div className={`dropdown ${styles.dropdown1} `}>
        <div>
          <a>Item 1</a>
          <a>Item 2</a>
          <a>Item 3</a>
        </div>
      </div>
    </>
  );
}
