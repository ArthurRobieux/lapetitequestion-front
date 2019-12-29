import React from "react";
import { NavLink } from "react-router-dom";

export const Menu = () => {
  return (
    <div>
      <NavLink to="/">Go to Home</NavLink>
      <NavLink to="/1/">Go to 1</NavLink>
      <NavLink to="/2/">Go to 2</NavLink>
    </div>
  );
};
