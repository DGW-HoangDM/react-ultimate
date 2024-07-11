import UserTable from "@components/user/user.table";
import UserForm from "@components/user/user.form";
import { useState, useEffect } from "react";
import { fetchAllUser } from "../services/api.service";

const UserPage = () => {
  const [dataUser, setDataUser] = useState([]);
  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const res = await fetchAllUser();
    setDataUser(res.data);
  };

  return (
    <>
      <div>User page</div>
      <UserForm loadUser={loadUser} />
      <UserTable dataUser={dataUser} />
    </>
  );
};

export default UserPage;
