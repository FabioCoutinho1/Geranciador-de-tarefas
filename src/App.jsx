import "./App.css";
import ContainerBoxTask from "./components/layouts/containerTask/ContainerBoxTask";
import LeftMenu from "./components/layouts/leftAsideMenu/LeftMenu";
import RightMenu from "./components/layouts/rightAsideMenu/RightMenu";

function App() {
  return (
    <main className="flex h-screen w-screen bg-cover bg-[url(/src/assets/background.jpg)] overflow-hidden]">
      <LeftMenu />
      <ContainerBoxTask />
      <RightMenu />
    </main>
  );
}

export default App;
