import React from "react";
import { ClockCircleOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = ["/", "Business", "Entertainment", "Sport", "Technology"];
  return (
    <nav className="shadow max-w-full mx-auto  my-4 sticky top-0 z-10 bg-white">
      <div className="flex items-center justify-between mx-auto max-w-6xl">
        <div className="flex items-center space-x-2">
          <ClockCircleOutlined />
          <h2>NewsRound</h2>
        </div>
        <div className="space-x-6">
          {links.map((item) => (
            <NavLink to={item}>{item === "/" ? "Home" : item}</NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
