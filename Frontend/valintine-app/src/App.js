import logo from "./logo.svg";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import AllRoutes from "./Routes/AllRoutes";
import Navbar from "./Pages/Navbar";
import Footer from "./Components/HomeComponents/Footer";
import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import AdminPanel from "./Pages/Admin";
import { useDispatch, useSelector } from "react-redux";
import { handlegetcartproducts } from "./Redux/action";
import Whatsapp from "./Components/HomeComponents/Whatsapp";

// import handleOpe
function App() {
  const Msg = ({ closeToast, toastProps }) => (
    <div>
      <img
        style={{ width: "20%", height: "20%" }}
        src="https://valentinesaga.com/wp-content/uploads/2023/03/Bouquet-N-Greeting-Card-4.2.jpg"
        alt="popup"
      />
      Lorem ipsum dolor {toastProps.position}
      <button>Retry</button>
      <button onClick={closeToast}>Close</button>
    </div>
  );

  const store = useSelector((store) => store);
  const { cart, admin_token } = store;
  // const admin_token = sessionStorage.getItem('admin_token') || ""
  const [admin, setadmin] = useState("");
  const notify = () => {
    toast(<Msg />, { position: "bottom-left" });
  };
  // console.log(admin_token)

  useEffect(() => {
    let popup = setTimeout(() => {
      notify();
    }, 2000);
    return () => {
      clearTimeout(popup);
    };
  }, []);
  const dispatch = useDispatch();
  useEffect(() => {
    let user = JSON.parse(sessionStorage.getItem("userdetails"));

    dispatch(handlegetcartproducts(user?._id));
  }, []);

  useEffect(() => {
    setadmin(admin_token);
  }, [admin_token]);

  // console.log(admin)

  return (
    <div className="App">
      {admin.length == 0 && <Navbar cartcount={cart?.length} />}
      {admin.length == 0 && <Whatsapp />}
      <div style={{ minHeight: "80vh" }}>
        <AllRoutes />
      </div>

      <ToastContainer />
      {admin.length == 0 && <Footer />}
    </div>
  );
}

export default App;
