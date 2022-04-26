import React, { useEffect, useState } from "react";
import OwnerFooter from "../OwnerFooter/OwnerFooter";
import OwnerNav from "../OwnerNav/OwnerNav";
import OwnerSidebar from "../OwnerSidebar/OwnerSidebar";

const OwnerLayout = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  // console.log(toggle)
  const [windowWidth, setWindowWidth] = useState(1200);
  useEffect(() => {
    window.addEventListener("resize", () => {
      const width = window.innerWidth;
      setWindowWidth(width);
    });
  }, []);
  return (
    <>
      <div
        className={`pace-done vertical-layout vertical-menu-modern navbar-floating footer-static ${
          windowWidth >= 1200 ? "menu-expanded" : ""
        }  ${toggle ? "menu-open menu-expanded" : " menu-hide"}`}
      >
        <OwnerNav toggle={toggle} setToggle={setToggle} />
        <OwnerSidebar toggle={toggle} setToggle={setToggle} />

        <div className="app-content content ">
          <div className="content-overlay"></div>
          <div className="header-navbar-shadow"></div>
          <div className="content-wrapper container-xxl p-0">
            {children}
            </div>
        </div>
        <OwnerFooter/>
      </div>
    </>
  );
};

export default OwnerLayout;
