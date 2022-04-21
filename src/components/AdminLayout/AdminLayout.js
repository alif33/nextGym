import React, { useEffect, useState } from "react";
import AdminFooter from "../AdminFooter/AdminFooter";
import AdminNav from "../AdminNav/AdminNav";
import AdminSidebar from "../AdminSidebar/AdminSidebar";

const AdminLayout = ({ children }) => {
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
        <AdminNav toggle={toggle} setToggle={setToggle} />
        <AdminSidebar toggle={toggle} setToggle={setToggle} />

        <div className="app-content content ">
          <div className="content-overlay"></div>
          <div className="header-navbar-shadow"></div>
          <div className="content-wrapper container-xxl p-0">
            {children}
            </div>
        </div>
        <AdminFooter/>
      </div>
    </>
  );
};

export default AdminLayout;
