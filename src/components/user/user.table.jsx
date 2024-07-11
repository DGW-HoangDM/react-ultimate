import React from "react";
import { useState } from "react";
import { Space, Table, Tag } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import UpdateUserModal from "./update.user.modal";
import { fetchAllUser } from "../../services/api.service";

const UserTable = (props) => {
  const { dataUser } = props;
  const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
  const columns = [
    {
      key: "_id",
      title: "Full Name",
      dataIndex: "fullName",
      render: (_, record) => {
        return <a href="#">{record.fullName}</a>;
      },
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
    {
      key: "_id",
      title: "Action",
      key: "action",
      render: (_, record) => (
        <div style={{ display: "flex", gap: "20px" }}>
          <EditOutlined
            onClick={() => {
              console.log('ckeck record', record);
              setIsModalUpdateOpen(true);
            }}
            style={{ cursor: "pointer", color: "orange" }}
          />
          <DeleteOutlined style={{ cursor: "pointer", color: "red" }} />
        </div>
      ),
    },
  ];

  return (
    <>
      <Table columns={columns} dataSource={dataUser} rowKey={"_id"} />;
      <UpdateUserModal
        isModalUpdateOpen={isModalUpdateOpen}
        setIsModalUpdateOpen={setIsModalUpdateOpen}
      />
    </>
  );
};
export default UserTable;
