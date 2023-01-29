import React from "react";
import SideMenuItem from "./SideMenuItem";

import menuItems from "../../data/menuItems";

const SideMenu = () => {
  return (
    <div className="mt-5">
      <div className="flex flex-col space-y-3">
        {menuItems.map(
          (item, index) =>
            item.isVisible && (
              <SideMenuItem
                key={index}
                linkTo={item.linkTo}
                label={item.label}
                icon={item.icon}
              />
            )
        )}
      </div>
    </div>
  );
};

export default SideMenu;
