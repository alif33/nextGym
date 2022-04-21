import React from "react";

const AdminFooter = () => {
  return (
    <>
      <footer className="footer footer-static footer-light">
        <p className="clearfix mb-0">
          <span className="float-md-start d-block d-md-inline-block mt-25">
            COPYRIGHT © 2021
            <a
              className="ms-25"
              href="https://1.envato.market/pixinvent_portfolio"
              target="_blank" rel="noreferrer"
            >
              Pixinvent
            </a>
            <span className="d-none d-sm-inline-block">
              , All rights Reserved
            </span>
          </span>
          <span className="float-md-end d-none d-md-block">
            Hand-crafted &amp; Made with
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={14}
              height={14}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-heart"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </span>
        </p>
      </footer>
    </>
  );
};

export default AdminFooter;
