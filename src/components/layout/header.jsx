import { Menu } from "antd";
import {
  UsergroupAddOutlined,
  LoginOutlined,
  HomeOutlined,
  AuditOutlined,
  AliwangwangOutlined,
} from "@ant-design/icons";
import { useState, useContext } from "react";

import { Link } from "react-router-dom";

import { AuthContext } from "../context/auth.context";

const Header = () => {
  const [current, setCurrent] = useState("");
  const { user } = useContext(AuthContext);

  console.log("check user context", user);

  const onClick = (e) => {
    setCurrent(e.key);
  };
  const items = [
    {
      label: <Link to={"/"}>Home</Link>,
      key: "home",
      icon: <HomeOutlined />,
    },
    {
      label: <Link to={"/users"}>Users</Link>,
      key: "users",
      icon: <UsergroupAddOutlined />,
    },
    {
      label: <Link to={"/books"}>Books</Link>,
      key: "books",
      icon: <AuditOutlined />,
    },
    //Conditionally add object to an array while being declared
    ...!user.id ? [{
      label: <Link to={"/login"}>Đăng nhập</Link>,
      key: "login",
      icon: <LoginOutlined />,
    }] : [],
    ...user.id ? [{
      label: `Welcome: ${user.fullName}`,
      key: "setting",
      icon: <AliwangwangOutlined />,
      children: [
        {
          label: "Đăng xuất",
          key: "logout",
        },
      ],
    }] : [],
  ];

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};

export default Header;
