import React from "react";
import { Space, Table, Tag } from "antd";
import { fetchAllUser } from "../../services/api.service";

const UserTable = (props) => {
  const { dataUser } = props;
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

  return <Table columns={columns} dataSource={dataUser} rowKey={"_id"} />;
};
export default UserTable;
