import React from "react";
import { TabBar } from "antd-mobile";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";

const NavigateBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  const tabs = [
    {
      key: "/dashboard",
      title: "",
      icon: <HomeOutlined />,
      badge: "1",
    },
    {
      key: "/user",
      title: "",
      icon: <UserOutlined />,
      badge: "2",
    },
  ];
  return (
    <div className="tab-bar mt-2">
      <TabBar activeKey={pathname} onChange={(value) => navigate(value)}>
        {tabs.map((item) => (
          <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
        ))}
      </TabBar>
    </div>
  );
};

export default NavigateBar;
