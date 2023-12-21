import React from "react";
import { Button } from "antd";

import "./style.css";

const ButtonDefault = ({ title, onClick, loading, style, block }) => {
  return (
    <Button
      htmlType="submit"
      className="mt-button-default"
      onClick={onClick}
      loading={loading}
      style={style}
      block={block}
    >
      {title}
    </Button>
  );
};

export default ButtonDefault;
