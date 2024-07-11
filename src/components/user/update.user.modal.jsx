import { useState, useEffect } from "react";
import { Input, notification, Row, Typography, Modal } from "antd";
const { Text, Link, Title } = Typography;
import { createUserAPI } from "../../services/api.service";

const UpdateUserModal = (props) => {
  const [id, setId] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");

  const { isModalUpdateOpen, setIsModalUpdateOpen, dataUpdate, setDataUpdate } = props;

  useEffect(() => {
    // console.log('useEffect dataUpdate props', dataUpdate);
    setId(dataUpdate._id);
    setFullName(dataUpdate.fullName);
    setPhone(dataUpdate.phone);
  }, [dataUpdate]);

  const handleSubmitBtn = async () => {
    // const res = await createUserAPI(fullName, email, password, phone);
    // if (res.data) {
    //   notification.success({
    //     message: "Create user",
    //     description: "Tạo user thành công",
    //   });
    //   resetAndCloseModal();
    //   // await loadUser();
    // } else {
    //   notification.error({
    //     message: "Error create user",
    //     description: JSON.stringify(res.message),
    //   });
    // }
  };

  const resetAndCloseModal = () => {
    setIsModalUpdateOpen(false);
    setFullName("");
    setId("");
    setPhone("");
  };

  
  return (
    <Modal
      title="Update a User"
      okText={"SAVE"}
      open={isModalUpdateOpen}
      onOk={() => handleSubmitBtn()}
      onCancel={() => resetAndCloseModal()}
    >
      <div style={{ display: "flex", gap: 20, flexDirection: "column" }}>
        <Row>
          <Text>ID</Text>
          <Input
            placeholder=""
            value={id}
            disabled
          />
        </Row>
        <Row>
          <Text>Full name</Text>
          <Input
            placeholder="fullName"
            value={fullName}
            onChange={(e) => {
              setFullName(e.target.value);
            }}
          />
        </Row>
        <Row>
          <Text>Phone number</Text>
          <Input
            placeholder="Phone number"
            type="number"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
        </Row>
      </div>
    </Modal>
  );
};
export default UpdateUserModal;
