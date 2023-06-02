import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function DefaultLayout(props) {
  const { employee } = useSelector((state) => state.employee);
  const navigate = useNavigate();
  return (
    <div className="layout">
      <div className="header d-flex justify-content-between align-items-center">
        <h1 className="text-white">
          <b className="secondary-text">GRADE</b> BOOK
        </h1>
        <div className="d-flex align-items-center gap-4">
          <h1
            className="text-white text-small cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          >
            {employee?.name && employee.name.toUpperCase()}
          </h1>
          <h1
            className="text-white text-small cursor-pointer underline"
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/login");
            }}
          >
            LOGOUT
          </h1>
        </div>
      </div>
      <div className="content">{props.children}</div>
    </div>
  );
}



export default DefaultLayout;
