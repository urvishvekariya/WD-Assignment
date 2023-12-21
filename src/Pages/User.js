import React, { useState } from "react";
import { Col, Input, Row } from "antd";
import Moptro_logo from "../assets/images/moptro_logo.png";
import User_call from "../assets/images/user_call.png";
import userData from "../assets/data/user.json";
import NavigateBar from "./NavigateBar";

const { Search } = Input;
const User = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredEmployees = userData.users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="main-div">
      <div className="d-flex p-2 justify-content-end">
        <img src={User_call} alt="user_call" />
      </div>
      <div className="d-flex justify-content-center moptro-logo-div position-relative">
        <img src={Moptro_logo} alt="moptro-logo" />
        <p className="badge-val">4</p>
        <div className="badge-div" />
      </div>
      <div className="user-main-div">
        <Search
          placeholder="Search with name"
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="user-list-div text-white">
        {filteredEmployees.map((user) => (
          <div className="user-div">
            <Row>
              <Col sx={24}>
                <p className="me-2">
                  EMP ID : <span className="emp-value">{user.Eid}</span>{" "}
                </p>
              </Col>
            </Row>
            <Row>
              <Col sx={24}>
                <p>
                  Name : <span className="emp-value"> {user.name}</span>{" "}
                </p>
              </Col>
            </Row>
            <Row>
              <Col sx={24}>
                <p>
                  DOB : <span className="dob-value">{user.DOB}</span>{" "}
                </p>
              </Col>
            </Row>
            <Row>
              <Col sx={24}>
                <p>
                  Role : <span className="role-value">{user.role}</span>{" "}
                </p>
              </Col>
            </Row>
          </div>
        ))}
      </div>
      <NavigateBar />
    </div>
  );
};

export default User;
