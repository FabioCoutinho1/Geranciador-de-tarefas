import React from "react";
import LeftMenu from "../components/layouts/leftAsideMenu/LeftMenu";
import ContainerBoxTask from "../components/layouts/containerTask/ContainerBoxTask";
import RightMenu from "../components/layouts/rightAsideMenu/RightMenu";

const Main = () => {
  return (
    <div className="fixed inset-0 flex overflow-hidden bg-[url(/src/assets/background.jpg)] bg-cover bg-center">
      <LeftMenu />
      <ContainerBoxTask />
      <RightMenu />
    </div>
  );
};

export default Main;
