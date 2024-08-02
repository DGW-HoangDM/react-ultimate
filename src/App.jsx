import Header from "@components/layout/header";
import Footer from "@components/layout/footer";
import { Outlet } from "react-router-dom";
import { useEffect, useContext } from "react";
import { getAccountAPI } from "./services/api.service";
import { AuthContext } from "./components/context/auth.context";

const App = () => {
  const { setUser } = useContext(AuthContext);

  useEffect(() => {
    feetUserInfo();
  }, []);

  const feetUserInfo = async () => {
    const res = await getAccountAPI();
    if (res.data) {
      setUser(res.data.user); // Set user to AuthContext
    }
  };

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
