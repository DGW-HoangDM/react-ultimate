import React from "react";
import { Space, Table, Tag } from "antd";
import { fetchAllUser } from "../../services/api.service";
import { useState, useEffect } from "react";

const UserTable = () => {
  const [dataUser, setDataUser] = useState([]);
  useEffect(() => {
    loadUser();
  }, []);

  const columns = [
    {
      key: "_id",
      title: "Full Name",
      dataIndex: "fullName",
    },
    {
      key: "_id",
      title: "Phone",
      dataIndex: "phone",
    },
    {
      key: "_id",
      title: "Email",
      dataIndex: "email",
    },
  ];

  const loadUser = async () => {
    const res = await fetchAllUser();
    setDataUser(res.data);
  };

  return <Table columns={columns} dataSource={dataUser} rowKey={"_id"} />;
};
export default UserTable;
