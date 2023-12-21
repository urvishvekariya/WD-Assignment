import React from "react";
import { Progress } from "antd";
import Moptro_logo from "../assets/images/moptro_logo.png";
import User_call from "../assets/images/user_call.png";
import NavigateBar from "../Components/Nav/NavigateBar";

const Dashboard = () => {
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
      <div className="dashboard-main-div">
        <div>
          <div className="dashboard-header">
            <p className="mb-0">Employee Productivity Dashboard</p>
          </div>
          <div className="progress-main-div">
            <span>Productivity on Monday</span>
            <Progress percent={20} size={[290, 10]} />
            <span>Productivity on Tueday</span>
            <Progress percent={92} size={[290, 10]} />
            <span>Productivity on Wednesday</span>
            <Progress percent={99} size={[290, 10]} />
            <span>Productivity on Thursday</span>
            <Progress percent={93} size={[290, 10]} />
            <span>Productivity on Friday</span>
            <Progress percent={89} size={[290, 10]} />
            <span>Productivity on Saturday</span>
            <Progress percent={98} size={[290, 10]} />
          </div>
        </div>
      </div>

      <NavigateBar />
    </div>
  );
};

export default Dashboard;
