import react from "react";
import NavLinks from "./NavLinks";
import q from "./Nav.module.css"

const Navigation = () => {
    return (
        <nav className={q.navigation}>
            <NavLinks />
        </nav>
    )
}

export default Navigation;