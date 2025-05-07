import React from "react";
import logo from "../assets/images/logo.svg";

function Header() {
  return (
    <div className="p-[12px] bg-Neutral-800 rounded-2xl">
      <img src={logo} alt="logo" />
    </div>
  );
}

export default Header;
