import React from "react";
import { useState, useEffect } from "react";
import { Drawer } from "antd";
import {
  WhatsAppOutlined,
  MailOutlined,
  TeamOutlined,
} from "@ant-design/icons";

const ViewUserDetail = (props) => {
  const {
    dataDetailUser,
    setDataDetailUser,
    isDetailUserOpen,
    setIsDetailUserOpen,
  } = props;

  return (
    <Drawer
      title="Detail User"
      onClose={() => setIsDetailUserOpen(false)}
      open={isDetailUserOpen}
    >
      {
        dataDetailUser ? <>
          <p style={{ display: "flex", gap: "20px", marginBottom: 10 }}>
            <TeamOutlined />
            <span>{dataDetailUser.fullName}</span>
          </p>
          <p style={{ display: "flex", gap: "20px", marginBottom: 10 }}>
            <MailOutlined />
            <span>{dataDetailUser.email}</span>
          </p>
          <p style={{ display: "flex", gap: "20px" }}>
            <WhatsAppOutlined />
            <span>{dataDetailUser.phone}</span>
          </p>
        </>
        :
        <>
          <p>Không có dữ liệu</p>
        </>
      }
      
    </Drawer>
  );
};
export default ViewUserDetail;
