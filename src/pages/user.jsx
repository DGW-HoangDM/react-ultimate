import UserTable from "@components/user/user.table";
import UserForm from "@components/user/user.form";

const UserPage = () => {
  return(
    <>
      <div>User page</div>
      <UserForm />
      <UserTable />
    </>
  )
}

export default UserPage;