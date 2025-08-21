import NavPosition from "../nav-position/nav-position";
import NavOtherLinks from "../nav-other-links/nav-other-links";
import NavOtherPrevNext from "../nav-other-prev-next/nav-other-prev-next";

function NavPreFooter({ navPosition, navOtherLinks, navOtherPrevNext }) {
  return (
    <div className="nav-pre-footer">
      {navPosition && <NavPosition items={navPosition} />}
      {navOtherLinks && <NavOtherLinks {...navOtherLinks} />}
      {navOtherPrevNext && <NavOtherPrevNext {...navOtherPrevNext} />}
    </div>
  );
}

export default NavPreFooter;
