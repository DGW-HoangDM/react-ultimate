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
      onClose={() => {
        setDataDetailUser({});
        setIsDetailUserOpen(false);
      }}
      open={isDetailUserOpen}
    >
      {dataDetailUser ? (
        <>
          <p style={{ display: "flex", gap: "20px", marginBottom: 10 }}>
            <TeamOutlined />
            <span>{dataDetailUser.fullName}</span>
          </p>
          <p style={{ display: "flex", gap: "20px", marginBottom: 10 }}>
            <MailOutlined />
            <span>{dataDetailUser.email}</span>
          </p>
          <p style={{ display: "flex", gap: "20px", marginBottom: 10 }}>
            <WhatsAppOutlined />
            <span>{dataDetailUser.phone}</span>
          </p>
          <p>Avatar:</p>
          <div>
            <img
              height={150}
              width={150}
              src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${
                dataDetailUser.avatar
              }`}
            />
          </div>
          <div>
            <label
              htmlFor="btnUpload"
              style={{
                display: "block",
                width: "fit-content",
                marginTop: "15px",
                padding: "5px 10px",
                background: "orange",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Upload Avatar
            </label>
            <input type="file" hidden id="btnUpload" />
          </div>
        </>
      ) : (
        <>
          <p>Không có dữ liệu</p>
        </>
      )}
    </Drawer>
  );
};
export default ViewUserDetail;
