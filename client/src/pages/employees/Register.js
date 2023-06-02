import { Form, Input } from "antd";
import axios from "axios";
import React from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { HideLoading, ShowLoading } from "../../redux/alerts";

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      const response = await axios.post("/api/employee/register", values);
      dispatch(HideLoading());
      if (response.data.success) {
        toast.success(response.data.message);
        navigate("/login");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      toast.error(error.message);
    }
  };
  return (
    <div className="login-page-1">
      <div className="row">
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <div className="text-part d-flex flex-column">
            <Form layout="vertical w-400 white p-4" onFinish={onFinish}>
              <h1 className="text-medium">Teacher - Registration</h1>
              <hr />
              <Form.Item
                name="name"
                label="Name"
                rules={[
                  {
                    required: true,
                    message: "Please enter your name",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="employeeId"
                label="Teacher ID"
                rules={[
                  {
                    required: true,
                    message: "Please enter your Teacher ID",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="password"
                label="Password"
                rules={[
                  {
                    required: true,
                    message: "Please enter your password",
                  },
                ]}
              >
                <Input type="password" />
              </Form.Item>

              <Form.Item
                name="confirmPassword"
                label="Confirm Password"
                rules={[
                  {
                    required: true,
                    message: "Please confirm your password",
                  },
                ]}
              >
                <Input type="password" />
              </Form.Item>

              <button className="primary text-white px-5 my-2 w-100">
                REGISTER
              </button>
              <Link to="/login" className=" text-mini">
                Already Registered , Click Here To Login
              </Link>
            </Form>
          </div>
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <img src="\ResultHome.png" alt="" />
        </div>
      </div>
      <div className="login-page-1-rectange"></div>
    </div>
  );
}

export default Register;
