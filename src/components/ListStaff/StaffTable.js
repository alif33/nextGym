import Link from "next/link";
import React, { useEffect, useState } from "react";
import * as Icon from "react-feather";

const StaffTable = ({ data }) => {
  const { image, position, firstName, lastName, salary } = data;

  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    const closeAction = (e) => {
      if (e.path[1].tagName !== "BUTTON") {
        setToggle(false);
      }
    };
    document.body.addEventListener("click", closeAction);
    return () => document.body.removeEventListener("click", closeAction);
  }, []);

  return (
    <>
      <tr>
        <td>
          <img
            src={data.iamge}
            className="me-75"
            height={20}
            width={20}
            alt="Angular"
          />
        </td>
        <td>{`${firstName} ${lastName}`} </td>
        <td>{position}</td>

        <td>
          <span
            className={`badge rounded-pill badge-light-${
              data.status === "Active" ? "primary" : "danger"
            } me-1`}
          >
            {"Active"}
          </span>
        </td>
        <td>{"$" + salary}</td>
        <td>
          <div className="dropdown">
            <button
              onClick={() => setToggle(!toggle)}
              id={data.id}
              type="button"
              className={`btn btn-sm dropdown-toggle hide-arrow py-0 waves-effect waves-float waves-light ${
                toggle ? "show" : ""
              }`}
              data-bs-toggle="dropdown"
            >
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
                className="feather feather-more-vertical"
              >
                <circle cx={12} cy={12} r={1} />
                <circle cx={12} cy={5} r={1} />
                <circle cx={12} cy={19} r={1} />
              </svg>
            </button>
            <div
              className={`dropdown-menu dropdown-menu-end ${
                toggle ? "show" : ""
              }`}
              style={
                toggle
                  ? {
                      position: "absolute",
                      inset: "0px auto auto 0px",
                      margin: "0px",
                      transform: "translate(-93px, 14px)",
                    }
                  : {}
              }
            >
              <Link  href={`/admin/staff/edit/${data._id}`}>
                <a className="dropdown-item">
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
                    className="feather feather-edit-2 me-50"
                  >
                    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
                  </svg>
                  <span>Edit</span>
                </a>
              </Link>
              <a className="dropdown-item" href="#">
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
                  className="feather feather-trash me-50"
                >
                  <polyline points="3 6 5 6 21 6" />
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                </svg>
                <span>Delete</span>
              </a>
            </div>
          </div>
        </td>
        <td>
          <Link href={`/admin/staff/list/${data._id}`}>
            <a>
              <Icon.Link />
            </a>
          </Link>
        </td>
      </tr>
    </>
  );
};

export default StaffTable;
