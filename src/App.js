import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/landing/Landing";
import YouTubeVideos from "./components/landing/Youtube";
import './App.css';
import UserProfile from "./components/User/UserProfile";
import Admin from "./components/admin/Admin";
import SignUp from "./components/Auth/Signup";
import LogIn from "./components/Auth/Signin";
import UserUpdate from "./components/User/UserUpdate";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="home" index element={<Landing />} />
      <Route path="YouTubeVideos" element={<YouTubeVideos />} />
      <Route path="/User/UserProfile" element={<UserProfile />} />
      <Route path="/User/UserUpdate" element={<UserUpdate />} />
      <Route path="Admin" element={<Admin />} />
      <Route path="SignUp" element={<SignUp />} />
      <Route path="Login" element={<LogIn />} />
      </Routes>
    </BrowserRouter>
  );
}