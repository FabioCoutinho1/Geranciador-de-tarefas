import { Outlet } from "react-router";
import "./App.css";
import ContainerBoxTask from "./components/layouts/containerTask/ContainerBoxTask";
import LeftMenu from "./components/layouts/leftAsideMenu/LeftMenu";
import RightMenu from "./components/layouts/rightAsideMenu/RightMenu";

function App() {
  return (
    <main className="">
      <Outlet />
    </main>
  );
}

export default App;
