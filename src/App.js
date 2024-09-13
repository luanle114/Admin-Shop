import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage/index.jsx";
import ManageStaffPage from "./pages/StaffPage/index.jsx";
import CustomerProfilePage from "./pages/CustomerPage/index.jsx";
import OrdersPage from "./pages/OrderPage/index.jsx";
import Sidebar from "./components/SideBar/index.jsx";

function App() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ padding: "20px", width: "100%" }}>
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/manage-staff" element={<ManageStaffPage />} />
            <Route path="/customer-profile" element={<CustomerProfilePage />} />
            <Route path="/orders" element={<OrdersPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
