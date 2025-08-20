function DropdownMenu({ idMegamenu, children }) {
  return (
    <div
      className="dropdown-menu shadow-lg"
      role="region"
      aria-labelledby={idMegamenu}
    >
      {children}
    </div>
  );
}

export default DropdownMenu;
