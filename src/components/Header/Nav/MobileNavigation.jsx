import react, { useState } from "react";
import NavLinks from "./NavLinks";
import q from "./Nav.module.css";
import { MdMenu } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";

const MobileNavigation = () => {
  const [open, setOpen] = useState(false);

  const hamburgerIcon = (
    <MdMenu
      className={q.hamburger}
      size="30px"
      onClick={() => setOpen(!open)}
    />
  );
  const closeIcon = (
    <MdOutlineClose
      className={q.hamburger}
      size="30px"
      onClick={() => setOpen(!open)}
    />
  );

  return (
    <nav className={q.mobileNavigation}>
      {open ? closeIcon : hamburgerIcon}
      {open && <NavLinks />}
    </nav>
  );
};

export default MobileNavigation;
