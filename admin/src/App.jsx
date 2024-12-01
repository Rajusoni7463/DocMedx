import React, { useContext } from "react";
import Login from "./pages/login";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AdminContext } from "./context/AdminContext";
import NavBar from "./component/NavBar";
import SideBar from "./component/SideBar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Admin/Dashboard";
import AllAppointment from "./pages/Admin/AllAppointment";
import AddDoctor from "./pages/Admin/AddDoctor";
import DoctorsList from "./pages/Admin/DoctorsList";


const App = () => {
  const { atoken } = useContext(AdminContext);
  return atoken ? (
    <div className="bg-[#F8F9FD]">
      <ToastContainer />
      <NavBar/>
      <div className="flex items-start">
        <SideBar/>
        <Routes>
          <Route path="/" element ={<></>}/>
          <Route path="/admin_dashboard" element ={<Dashboard/>}/>
          <Route path="/all_appointments" element ={<AllAppointment/>}/>
          <Route path="/add_doctor" element ={<AddDoctor/>}/>
          <Route path="/doctor_list" element ={<DoctorsList/>}/>
        </Routes>
      </div>
    </div>
  ) : (
    <>
      <Login />
      <ToastContainer />
    </>
  );
};

export default App;
