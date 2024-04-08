import React from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { BiRadioCircle, BiRadioCircleMarked } from "react-icons/bi";

function Navbar() {
  return (
    <div>
      <nav>
        <h1>
          <Link to={"/"}>TATUFF TTJ</Link>
        </h1>

        <div className="page">
          <NavLink className={"students"} to={"/students"}>
            <span>Talabalar</span>
            <ul>
              <NavLink to={"/students/studentall"}>
                <BiRadioCircle /> barchasi
              </NavLink>
              <NavLink to={"/students/studentwait"}>
                <BiRadioCircle /> Kutmoqda
              </NavLink>
              <NavLink to={"/students/studentgiven"}>
                <BiRadioCircle /> Berildi
              </NavLink>
              <NavLink to={"/students/studentout"}>
                <BiRadioCircle />
                Chiqib ketdi
              </NavLink>
            </ul>
          </NavLink>

          <NavLink to={"/studentsInfo"}>
            <span>Talabalar ma'lumoti</span>
          </NavLink>
          <NavLink className={"rooms"} to={"/rooms"}>
            <span>xonalar</span>
            <ul >
              <NavLink to={"/rooms/roomsall"}>
                <BiRadioCircle /> barchasi
              </NavLink>
              <NavLink to={"/"}>
                <BiRadioCircle /> 1-qavat
              </NavLink>
              <NavLink to={"/"}>
                <BiRadioCircle /> 2-qavat
              </NavLink>
              <NavLink to={"/"}>
                <BiRadioCircle /> 3-qavat
              </NavLink>
              <NavLink to={"/"}>
                <BiRadioCircle /> 4-qavat
              </NavLink>
            </ul>
          </NavLink>

          <NavLink to={"/RoomsInfo"}>
            <span>xonalar ma'lumoti</span>
          </NavLink>
          <NavLink to={"/dsdsddssd"}>
            <span>to'lovlar</span>
          </NavLink>
          <div className="ul">{/* <li>Barchasi</li> */}</div>
        </div>
        <button>Log Out</button>
      </nav>
    </div>
  );
}

export default Navbar;
