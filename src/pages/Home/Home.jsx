import React, { useCallback } from "react";
import Content from "../../components/Content/Content";
import SideMenu from "../../components/SideMenu/SideMenu2";

export default function Home() {
  const menuList = useCallback(() => {
    console.log("Menus");
  });

  return (
    <div className="flex h-screen justify-between">
      <SideMenu menus={menuList} />
      <div className="flex flex-1 flex-col h-screen">
        <Content />
      </div>
    </div>
  );
}
