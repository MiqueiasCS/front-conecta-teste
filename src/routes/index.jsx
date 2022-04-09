import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/home";
import { Login } from "../pages/login";
import { Dashboard } from "../pages/dashboard";

export const Pages = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};
