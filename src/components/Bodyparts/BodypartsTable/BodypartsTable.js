import Link from "next/link";
import React, { useEffect, useState } from "react";
import * as Icon from "react-feather";

const BodypartsTable = ({ data }) => {
  const [trigger, setTrigger] = useState(false)
  const [toggle, setToggle] = useState(false);

  useEffect(() => {

    const closeAction = (e) => {
      if (e.path[1].tagName !== "BUTTON") {
        setToggle(false);
      }
      // console.log(e.path)
    };
    document.body.addEventListener("click", closeAction);
    return () => document.body.removeEventListener("click", closeAction);
  }, []);

  return (
    <>
          {trigger && <EquipmentModal trigger={trigger} setTrigger={setTrigger} id={data._id}/>}
      <tr>
        
      <td>
          <img
            src={data.image}
            className="me-75"
            height={20}
            width={20}
            alt="name"
          />
        </td>
        <td>{data.name}</td>
        <td>
          <div className="dropdown">
            <button
              onClick={() => setToggle(!toggle)}
              id={data._id}
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
              <Link  href={`/admin/bodyparts/edit/${data._id}`}>
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
                    className="feather feather-edit-2 me-50"
                  >
                    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
                  </svg>
                  <span>Edit</span>
                </a>
              </Link>
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
        <button onClick={() => setTrigger(true)} className="btn btn-sm"> <Icon.Eye/></button>
          </td>
      </tr>
    </>
  );
};

export default BodypartsTable;
