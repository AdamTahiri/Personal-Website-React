import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import "../Styles/NavBar.css";
// import NavLinks from "./NavLinks";

const NavBar = () => {
  const [navBar, setNavBar] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [mobile, setMobile] = useState(false)

  //   const navBar = document.querySelector(".nav_container");
  //   const burger = document.querySelector(".burger");
  //   const nav = document.querySelector(".nav_links");
  //   const navLinks = document.querySelectorAll(".links");

  const handleDropDown = () => {
    setDropDown((dropDown) => !dropDown);
  };

  const showOrRemoveDropDown = (event) => {
    setDropDown(dropDown === false)
  }

  const changeNavBackground = () => {
    if (window.scrollY > 5) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };

  useEffect(() => {
    changeNavBackground();
    window.addEventListener("scroll", changeNavBackground);
  }, []);

  //   burger.addEventListener("click", () => {
  //     nav.classList.toggle("nav_active");
  //     navLinks.forEach((link, i) => {
  //         if (link.style.animation) {
  //             link.style.animation = "";
  //         } else {
  //             link.style.animation = `navLinkFade .5s ease forwards ${i / 6 + 0.3}s`;
  //         }
  //     });
  //     burger.classList.toggle("toggle");
  //   });

  // const handleBurger = (event) => {
  //   // debugger;
  //   // setDropDown(!dropDown);
  //   nav.classList.toggle("nav_active");
  //   navLinks.forEach((link, i) => {
  //       if (link.style.animation) {
  //           link.style.animation = "";
  //         } else {
  //             link.style.animation = `navLinkFade .5s ease forwards ${i / 6 + 0.3}s`;
  //         }
  //     });
  //     burger.classList.toggle("toggle");
  // };

  // const handleDropDown = (event) => {
  //     burger.classList.toggle("toggle")
  // }

  return (
    <nav>
      <div className={navBar ? "nav_on_scroll" : "nav_container"}>
        <div className="nav_logo">
          <h3>Adam Tahiri</h3>
        </div>
        <ul onClick={showOrRemoveDropDown} className={dropDown || window.innerWidth > 1024 ? "nav_links" : "nav_links_hidden"}>
          <li>
            <NavLink className="links" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="links" to="/aboutme">
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink className="links" to="projects">
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink className="links" to="skills">
              Skills
            </NavLink>
          </li>
        </ul>
        <div
          //   onClick={(e) => handleBurger(e)}
          //   className={`burger ${dropDown ? "toggle" : ""}`}
          onClick={handleDropDown}
          className={dropDown ? "burger toggle" : "burger"}
        >
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
