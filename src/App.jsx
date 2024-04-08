import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import User from "./components/Navbar/User";
import Rooms from "./pages/rooms/Rooms";
import StudentInfo from "./pages/studentInfo/StudentInfo";
import Students from "./pages/students/Students";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RoomsInfo from "./pages/roomsInfo/RoomsInfo";
import Home from "./pages/home/Home";
import StudentAll from "./pages/students/StudentAll";
import StudentWait from "./pages/students/StudentWait";
import StudentGiven from "./pages/students/StudentGiven";
import StudentOut from "./pages/students/StudentOut";
import RoomsAll from "./pages/rooms/RoomsAll";

function App() {
  return (
    <div className="body">
      <BrowserRouter>
        <Navbar />
        <User />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/studentsInfo" element={<StudentInfo />} />
          <Route path="/RoomsInfo" element={<RoomsInfo />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/rooms/roomsall" element={<RoomsAll />} />
          <Route path="/students" element={<Students />} />
          <Route path="/students/studentall" element={<StudentAll />} />
          <Route path="/students/studentwait" element={<StudentWait />} />
          <Route path="/students/studentgiven" element={<StudentGiven />} />
          <Route path="/students/studentout" element={<StudentOut />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
