import React from "react";
import { ClockCircleOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = ["/", "Business", "Entertainment", "Sport", "Technology"];
  return (
    <nav className="shadow max-w-4xl mx-auto px-5 my-4 sticky top-0">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <ClockCircleOutlined />
          <h3>NewsRound</h3>
          {/* <div>
        <NavLink>Economy</NavLink>
        <NavLink>Entertainment</NavLink>
        <NavLink>Sport</NavLink>
        <NavLink>Technology</NavLink>
      </div> */}
        </div>
        <div className="space-x-3">
          {links.map((item) => (
            <NavLink to={item}>{item === "/" ? "Home" : item}</NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
