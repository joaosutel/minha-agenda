import React from "react";
import SideMenuItem from "./SideMenuItem";

export default function SideMenuList({ menus }) {
  return (
    <div className="flex flex-col space-y-2">
      <SideMenuItem key={20} label={"Home"} />
      {menus.map((item, index) => (
        <SideMenuItem key={index} label={item.label} icon={item.icon} />
      ))}
    </div>
  );
}
