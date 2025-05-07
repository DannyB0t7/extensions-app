import React, { useContext } from "react";
import "./ToggleSwitch.css";
import { ExtensionCtx } from "../store/ExtensionListContext";

function ToggleSwitch({ isActive, name }) {
  const { toggleIsActive } = useContext(ExtensionCtx);

  return (
    <label className="switch">
      <input
        type="checkbox"
        id="toggleSwitch"
        onChange={() => toggleIsActive(name)}
        checked={isActive}
      />
      <span className="slider"></span>
    </label>
  );
}

export default ToggleSwitch;
