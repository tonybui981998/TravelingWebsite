import HomeMainPage from "./component/homePage/HomeMainPage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginPage from "./component/loginPage/LoginPage";
import RegisterPage from "./component/registerPage/RegisterPage";
import AboutUsHomePage from "./component/aboutUs/AboutUsHomePage";
import ContactUs from "./component/contactUs/ContactUs";
import DestinationHomePage from "./component/destinationHomePage/DestinationHomePage";
import MakeBookingMain from "./component/makeBooking/MakeBookingMain";
import PatyMentPage from "./component/payMentPage/PatyMentPage";
import PaymentDone from "./component/payMentDone/PaymentDone";
import AdminHomePage from "./component/admincomponent/adminHomePage/AdminHomePage";
import "../src/App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeMainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/about-us" element={<AboutUsHomePage />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/our-destination" element={<DestinationHomePage />} />
          <Route path="/booking-confirm" element={<MakeBookingMain />} />
          <Route path="/payment-confirm" element={<PatyMentPage />} />
          <Route path="/payment" element={<PaymentDone />} />
          <Route path="/adminPage" element={<AdminHomePage />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="top-center"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default App;
