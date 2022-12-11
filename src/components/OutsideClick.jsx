export default function OutsideClick(
  listening,
  setListening,
  dropdownRef,
  setIsOpen
) {
  return () => {
    if (listening) return;
    if (!dropdownRef.current) return;
    setListening(true);
    [`click`, `touchstart`].forEach((type) => {
      document.addEventListener(`click`, (evt) => {
        const cur = dropdownRef.current;
        const node = evt.target;
        if (cur.contains(node)) return;
        setIsOpen(false);
      });
    });
  };
}
