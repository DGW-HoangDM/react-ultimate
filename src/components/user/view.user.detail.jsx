import { Drawer } from "antd";
import { useState } from "react";
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

  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleChangeUploadFile = (event) => {
    if (!event.target.files || event.target.files.length === 0) {
      setSelectedFile(null);
      setPreview(null);
      return;
    }
    const file = event.target.files[0];
    if(file){
      setSelectedFile(file);
      const objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl);
    }
  };

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
          <div
            style={{
              marginTop: 10,
              height: 100,
              width: 100,
              border: "1px solid #ccc",
            }}
          >
            <img
              style={{
                objectFit: "contain",
                height: "100%",
                width: "100%",
              }}
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
            <input
              onChange={(event) => handleChangeUploadFile(event)}
              type="file"
              hidden
              id="btnUpload"
            />
          </div>
          {preview &&
            <div
              style={{
                marginTop: 10,
                height: 100,
                width: 100,
                border: "1px solid #ccc",
              }}
            >
              <img
                style={{
                  objectFit: "contain",
                  height: "100%",
                  width: "100%",
                }}
                height={150}
                width={150}
                src={preview}
              />
            </div>
          }
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
