import { Reorder } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css"


function Navbar() {

    // condition to expand the navbar
    const [expandNavbar, setExpandNavbar] = useState(false);
    function buttonExpandNavbar () {
        setExpandNavbar(prevCondition => !prevCondition)
    }

    const location = useLocation()

    // Whenever we change pages, the navbar will be close
    useEffect(() => {
        setExpandNavbar(false)
    },[location])

    return (
        <div className="navbar" id={expandNavbar ? "open" : "close" }>
            <div className="toggleButton">
                <button onClick={buttonExpandNavbar}>
                    <Reorder />
                </button>
            </div>

            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/experience">Experiences</Link>
                <Link to="/achievement">Achievements</Link>
            </div>
        </div>
    );
}

export default Navbar;