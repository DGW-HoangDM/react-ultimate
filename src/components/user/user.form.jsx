import { Input, notification, Col, Row, Button, Flex,Space, Typography } from "antd";
const { Text, Link } = Typography;

import { useState } from "react";
import { createUserAPI } from "../../services/api.service";

const UserForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const handleCreateUser = async () => {
    const res = await createUserAPI(fullName, email, password, phone);
    if(res.data){
      notification.success({
        message: "Create user",
        description: "Tạo user thành công"
      })
    }
  };

  return (
    <div
      style={{ display: "flex", gap: 20, flexDirection: "column", padding: 20 }}
    >
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
        <Text>Email</Text>
        <Input
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </Row>
      <Row>
        <Text>Password</Text>
        <Input.Password
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
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
      <Row>
        <Button type="primary" onClick={handleCreateUser}>
          Create user
        </Button>
      </Row>
    </div>
  );
};

export default UserForm;
