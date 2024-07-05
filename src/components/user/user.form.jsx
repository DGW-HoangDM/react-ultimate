import { Input } from "antd";
import { Col, Row } from 'antd';
import { Button, Flex } from 'antd';
import { Space, Typography } from 'antd';
const { Text, Link } = Typography;

const UserForm = () => {
  return(
    <div style={{display: "flex", gap: 20, flexDirection: "column", padding: 20}}>
      <Row>
        <Text>Full name</Text>
        <Input placeholder="Fulname" />
      </Row>
      <Row>
        <Text>Email</Text>
        <Input placeholder="Email" />
      </Row>
      <Row>
        <Text>Password</Text>
        <Input.Password placeholder="Password" type="password" />
      </Row>
      <Row>
        <Text>Phone number</Text>
        <Input placeholder="Phone number" type="number" />
      </Row>
      <Row>
        <Button type="primary">Create user</Button>
      </Row>
    </div>
  );
};

export default UserForm;
