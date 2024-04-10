import React from "react";
import { FaBell } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { IoChevronDownOutline } from "react-icons/io5";
import { FaCircleUser } from "react-icons/fa6";
import { MdMenu } from "react-icons/md";

function User() {
  return (
    <div>
      <div className="user_profile">
        <MdMenu />

        <div className="news">
          <div className="bell">
            <FaBell />
          </div>
          <div className="user">
            <FaCircleUser />
            <IoChevronDownOutline />
            <h1>name</h1> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
